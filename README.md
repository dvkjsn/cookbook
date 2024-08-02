# Cookbook

Welcome to the Dynamic Recipe Search Website! This web application allows users to input available ingredients and receive a curated list of matching recipes. Each recipe comes with detailed instructions and ingredient lists.

The backend is powered by FastAPI and PostgreSQL, while the frontend is designed with HTML, CSS, and JavaScript.

# Features

Ingredient-Based Search: Enter ingredients you have and find recipes that use them.

Recipe Details: View detailed ingredient lists and step-by-step instructions for each recipe.

# Website
Home Page: 


https://github.com/user-attachments/assets/319c26b1-0687-4d28-81c4-7d64f2454d4a



2nd screen:


https://github.com/user-attachments/assets/e9ee02f2-6d91-42c5-a9b9-bc0ff07a35ec



https://github.com/user-attachments/assets/e141e722-6b4d-4545-a6ad-a0c4646a8e98





# Installation & Setup

To get this project up and running on your local machine, follow these steps:
 1. **Set Up a Virtual Environment:** python -m venv venv
 2. **Activate the virtual environment:** On Windows: venv\Scripts\activate, On macOS/Linux: source venv/bin/activate
 3. **Install Dependencies:** pip install fastapi psycopg2-binary
 4. **Set Up PostgreSQL:** Download PostgreSQL for your system using this link: https://www.postgresql.org/download/
 5. **If you have not already done so, download an IDE:** You can use any IDE, I used Pycharm which you can download here: https://www.jetbrains.com/pycharm/download/?section=mac
 6. **Restoring from the Database:** At your command prompt, run the following command: `psql -f totalBackup.sql -U postgres total`. Note that the total database must exist already.

