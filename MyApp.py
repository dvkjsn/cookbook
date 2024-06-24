from typing import Union
from fastapi import FastAPI
import psycopg2
import datetime

app = FastAPI()

# get the current date and time
now = str(datetime.datetime.now())


@app.get("/")
def read_root():
    return {"Hello": "World, Now the time is:" + now}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
   return {"greeting": "Hello," + q }


@app.get("/greet/{myname}")
def greet(myname: Union[str, None] = None):
    return {"greeting": "Hello," + myname }

@app.get("/recipe/{pname}")
def ask(pname: Union[str, None] = None):
	hostname = 'localhost'
	database = 'total'
	username = 'postgres'
	pwd = '2005'
	port_id = 5432
	conn = None
	cur = None
	###SQL = "SELECT * FROM EMPLOYEE WHERE Name = '" + pname +"'"
	SQL = """
Select R.Name, R.Description, R.steps,
	json_build_object('Ingredients',json_agg(I.Ingredient_Name || ': ' || I.Quantity || ' ' || I.unit))
	from recipe R, Ingredient I
Where R.Item_id = I.Item_id
AND R.Name = %s 
Group by Name, Description, Steps
"""
	try:
		conn = psycopg2.connect( host = hostname, dbname = database, user = username, password = pwd, port = port_id)

		cur = conn.cursor()
		cur.execute(SQL,(pname,))
		return {"out":  cur.fetchall()}

	except Exception as error:
		print (error)

	finally:
		if cur is not None: 
			cur.close()
		if conn is not None:
			conn.close()
