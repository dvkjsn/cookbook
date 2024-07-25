from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import psycopg2
import datetime

app = FastAPI()
app.mount("/static_assets", StaticFiles(directory="static_assets"), name="static_assets")

hostname = 'localhost'
database = 'total'
username = 'postgres'
pwd = '2005'
port_id = 5432


# Function to establish database connection
def get_db_conn():
    conn = psycopg2.connect(host=hostname, dbname=database, user=username, password=pwd, port=port_id)
    return conn  # Function to connect to PostgreSQL database and return connection object


now = str(datetime.datetime.now())  # Get current timestamp as a string


@app.get("/search")  # Define an HTTP GET endpoint at '/search'
def search_recipe(keyword: str):
    conn = get_db_conn()  # Establish database connection
    cur = conn.cursor()  # Create a cursor object to execute SQL queries
    SQL = """
        SELECT Name
        FROM recipe
        WHERE LOWER(Name) LIKE %s
    """
    try:
        cur.execute(SQL, ('%' + keyword.lower() + '%',))  # Execute SQL query with keyword parameter
        results = [row[0] for row in cur.fetchall()]  # Fetch all rows and extract recipe names
        return results  # Return list of recipe names matching the keyword
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))  # Raise HTTP 500 error on database query failure
    finally:
        cur.close()  # Close cursor
        conn.close()  # Close database connection


# Endpoint to fetch recipe details by name
@app.get("/recipe/{pname}")  # Define an HTTP GET endpoint with a path parameter 'pname'
def get_recipe(pname: str):
    conn = get_db_conn()  # Establish database connection
    cur = conn.cursor()  # Create a cursor object to execute SQL queries
    SQL = """
        SELECT R.Name, R.Description, R.steps,
               json_build_object('Ingredients', json_agg(I.Ingredient_Name || ': ' || I.Quantity || ' ' || I.unit))
        FROM recipe R
        JOIN Ingredient I ON R.Item_id = I.Item_id
        WHERE R.Name = %s
        GROUP BY R.Name, R.Description, R.steps
    """
    try:
        cur.execute(SQL, (pname,))  # Execute SQL query with pname as parameter
        recipe_data = cur.fetchone()  # Fetch the first row of the result
        if recipe_data:
            return {
                "name": recipe_data[0],
                "description": recipe_data[1],
                "steps": recipe_data[2],
                "ingredients": recipe_data[3]['Ingredients']  # Return recipe details including ingredients
            }
        else:
            raise HTTPException(status_code=404,
                                detail=f"Recipe '{pname}' not found")  # Raise HTTP 404 if recipe not found
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))  # Raise HTTP 500 error on database query failure
    finally:
        cur.close()  # Close cursor
        conn.close()  # Close database connection


from typing import List


class Ingredients(BaseModel):
    ingredients: List[str]


# fetch("http://127.0.0.1:8000/recipe/search" , {method:"POST",headers: {
#             'Content-Type': 'application/json'
#         },body: JSON.stringify({ingredients:["recipe","cookbook"]})})

@app.post("/recipe/search")  # Define an HTTP GET endpoint with a path parameter 'pname'
def get_recipe_from_ingredients(ingredients: Ingredients):

