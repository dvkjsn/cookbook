from typing import Union
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import datetime

app = FastAPI()
app.mount("/static_assets", StaticFiles(directory="static_assets"), name="static_assets")

origins = [ # Define a list of origins (URLs) that are allowed to make cross-origin requests to the application
    "http://localhost",
    "http://localhost:8080",
	"http://localhost.tiangolo.com",
	"https://localhost.tiangolo.com",
	"http://localhost:63342",
	"http://127.0.0.1:8080"
]

app.add_middleware( # Add CORS middleware to the FastAPI application (`app`) with specific configurations
    CORSMiddleware, # Use the CORSMiddleware provided by FastAPI for handling CORS
    allow_origins=origins,  # Allow requests from the origins specified in the `origins` list
    allow_credentials=True, # Allow credentials (like cookies, HTTP authentication) in cross-origin requests
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.) in cross-origin requests
    allow_headers=["*"], # Allow all HTTP headers in cross-origin requests
)



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
