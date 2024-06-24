from typing import Union

from fastapi import FastAPI

app = FastAPI()

import datetime

# get the current date and time
now = str(datetime.datetime.now())


@app.get("/")
def read_root():
    return {"The date and time is: " + now}


@app.get("/greet/{myname}")
def greet(myname: Union[str, None] = None):
    return {
        "greeting": "Hello, " + myname,
        "date_and_time": "The date and time is: " + now
    }

