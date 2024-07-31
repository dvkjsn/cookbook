# Cookbook

Welcome to the Dynamic Recipe Search Website! This web application allows users to input available ingredients and receive a curated list of matching recipes. Each recipe comes with detailed instructions and ingredient lists.

The backend is powered by FastAPI and PostgreSQL, while the frontend is designed with HTML, CSS, and JavaScript.

# Features

Ingredient-Based Search: Enter ingredients you have and find recipes that use them.
Recipe Details: View detailed ingredient lists and step-by-step instructions for each recipe.

# Screenshots
Home Page: 
<img width="1412" alt="Screenshot 2024-07-31 at 5 42 49 PM" src="https://github.com/user-attachments/assets/77c8a1f2-d691-4f66-8216-be6d41edbeeb">

2nd screen:
<img width="1374" alt="Screenshot 2024-07-31 at 5 42 58 PM" src="https://github.com/user-attachments/assets/d6f2ff59-53b7-4c63-b14d-7be9a03819cc">

Example Ingredient List:
<img width="1351" alt="Screenshot 2024-07-31 at 5 50 59 PM" src="https://github.com/user-attachments/assets/2b03352b-4e76-4980-8d72-1d0951339c55">

Example Recipe:
<img width="1373" alt="Screenshot 2024-07-31 at 5 52 28 PM" src="https://github.com/user-attachments/assets/1c1023c4-276c-45cf-800a-b15048168af2">



# Installation & Setup

To get this project up and running on your local machine, follow these steps:
 1. Set Up a Virtual Environment: python -m venv venv
 2. Activate the virtual environment: On Windows: venv\Scripts\activate, On macOS/Linux: source venv/bin/activate
 3. Install Dependencies: pip install fastapi[all] psycopg2-binary
 4. Set Up PostgreSQL

