from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from typing import List
import psycopg2

# Initialize FastAPI application
app = FastAPI()

# Mount the static file directory for serving static assets
app.mount("/static_assets", StaticFiles(directory="static_assets"), name="static_assets")

# Database connection parameters
hostname = 'localhost'
database = 'total'
username = 'postgres'
pwd = '2005'
port_id = 5432

# Function to get a database connection
def get_db_conn():
    conn = psycopg2.connect(host=hostname, dbname=database, user=username, password=pwd, port=port_id)
    return conn

# Pydantic model for validating ingredients list
class Ingredients(BaseModel):
    ingredients: List[str]

# Endpoint to search for recipes based on a list of ingredients
@app.post("/recipe/search")
def get_recipe_from_ingredients(ingredients: Ingredients):
    # Establish a database connection
    conn = get_db_conn()
    cur = conn.cursor()

    # Return an empty list if no ingredients are provided
    if not ingredients.ingredients:
        return []

    # Create a string of placeholders (%s) for the SQL IN clause, one for each ingredient.
    # This allows the query to dynamically accommodate a variable number of ingredients.
    placeholders = ', '.join(['%s'] * len(ingredients.ingredients))

    # SQL query to rank recipes based on the number of matching ingredients
    SQL = f"""
        WITH ingredient_matches AS (
            SELECT
                r.item_id,
                r.name,
                COUNT(DISTINCT i.ingredient_name) AS matching_ingredients
            FROM recipe r
            JOIN ingredient i ON r.item_id = i.item_id
            WHERE i.ingredient_name IN ({placeholders})
            GROUP BY r.item_id, r.name
        ),
        total_ingredients AS (
            SELECT
                r.item_id,
                r.name,
                COUNT(DISTINCT i.ingredient_name) AS total_ingredients
            FROM recipe r
            JOIN ingredient i ON r.item_id = i.item_id
            GROUP BY r.item_id, r.name
        ),
        ranked_recipes AS (
            SELECT
                m.name,
                COALESCE(m.matching_ingredients, 0) AS matching_ingredients,
                COALESCE(t.total_ingredients, 0) AS total_ingredients,
                CASE
                    WHEN t.total_ingredients > 0 THEN m.matching_ingredients::FLOAT / t.total_ingredients
                    ELSE 0
                END AS matching_ratio
            FROM ingredient_matches m
            LEFT JOIN total_ingredients t ON m.item_id = t.item_id
        )
        SELECT
            name
        FROM ranked_recipes
        ORDER BY matching_ingredients DESC, matching_ratio DESC, name
        LIMIT 50;
    """

    try:
        # Execute the SQL query with the provided ingredients
        cur.execute(SQL, ingredients.ingredients)
        # Fetch the recipe names from the query result
        recipe_names = [row[0] for row in cur.fetchall()]
        return recipe_names
    except Exception as e:
        # Handle exceptions and return HTTP 500 error
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Close the database cursor and connection
        cur.close()
        conn.close()

# Endpoint to fetch details of a specific recipe by name
@app.get("/recipe/{pname}")
def get_recipe(pname: str):
    # Establish a database connection
    conn = get_db_conn()
    cur = conn.cursor()
    # SQL query to fetch recipe details and ingredients
    SQL = """
        SELECT R.Name, R.Description, R.steps,
               json_build_object('Ingredients', json_agg(I.Ingredient_Name || ': ' || I.Quantity || ' ' || I.unit)) AS ingredients
        FROM recipe R
        JOIN Ingredient I ON R.Item_id = I.Item_id
        WHERE R.Name = %s
        GROUP BY R.Name, R.Description, R.steps
    """
    try:
        # Execute the SQL query with the recipe name
        cur.execute(SQL, (pname,))
        # Fetch the recipe data from the query result
        recipe_data = cur.fetchone()
        if recipe_data:
            return {
                "name": recipe_data[0],
                "description": recipe_data[1],
                "steps": recipe_data[2],
                "ingredients": recipe_data[3]['Ingredients']
            }
        else:
            # Raise HTTP 404 error if recipe not found
            raise HTTPException(status_code=404, detail=f"Recipe '{pname}' not found")
    except Exception as e:
        # Handle exceptions and return HTTP 500 error
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Close the database cursor and connection
        cur.close()
        conn.close()
