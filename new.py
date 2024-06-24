from typing import Union
from fastapi import FastAPI, Response
import psycopg2
import datetime

app = FastAPI()

# Get the current date and time
now = str(datetime.datetime.now())


@app.get("/")
def read_root():
    return {"Hello": f"World, Now the time is: {now}"}

@app.get("/recipe/{pname}")
def ask(pname: str):
    hostname = 'localhost'
    database = 'total'
    username = 'postgres'
    pwd = '2005'
    port_id = 5432
    conn = None
    cur = None

    SQL = """
    SELECT R.Name, R.Description, R.steps,
    json_build_object('Ingredients', json_agg(I.Ingredient_Name || ': ' || I.Quantity || ' ' || I.unit))
    FROM recipe R
    JOIN Ingredient I ON R.Item_id = I.Item_id
    WHERE R.Name = %s
    GROUP BY R.Name, R.Description, R.steps
    """

    try:
        conn = psycopg2.connect(host=hostname, dbname=database, user=username, password=pwd, port=port_id)
        cur = conn.cursor()
        cur.execute(SQL, (pname,))
        result = cur.fetchall()

        if result:
            name, description, steps, ingredients = result[0]

            # Format steps without numbering, removes any leading or trailing whitespace from the steps
            formatted_steps = steps.strip()

            # Number ingredients
            ingredients_list = ingredients['Ingredients']
            formatted_ingredients = "\n".join(
                [f"{idx + 1}. {ingredient}" for idx, ingredient in enumerate(ingredients_list)])

            formatted_response = (
                f"Name: {name}\n\n"
                f"Description: {description}\n\n"
                f"Steps:\n{formatted_steps}\n\n"
                f"Ingredients:\n{formatted_ingredients}"
            )

            return Response(content=formatted_response, media_type="text/plain")

        else:
            return {"error": "Recipe not found"}

    except Exception as error:
        return {"error": str(error)}

    finally:
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()
