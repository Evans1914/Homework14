Express MongoDB CRUD API

📌 Project Overview

This project is an Express.js API that integrates MongoDB using Mongoose. It provides CRUD operations for storing, retrieving, updating, and deleting key-value pairs in a database. The API includes proper error handling, validation, and database interactions.

🚀 Features

CRUD Operations: Create, Read, Update, and Delete data.

MongoDB Integration: Uses Mongoose to interact with a MongoDB database.

Validation: Ensures required fields are provided.

Error Handling: Handles database connection issues and validation errors.

RESTful API: Easily consumable by frontend applications.

📂 Project Structure

/homework14
│── models/
│   └── Storage.js      # Mongoose Schema & Model
│── db.js               # MongoDB Connection
│── server.js           # Main Express Server
│── .env                # Environment Variables
│── package.json        # Project Dependencies
│── README.md           # Documentation

🏛 Database Schema & Models

Storage Model

A schema defining key-value storage, ensuring unique keys and required values.

🔌 Setting Up the API

1️⃣ Install Dependencies

Use npm install to set up necessary packages.

2️⃣ Set Up Environment Variables

Define database connection and server configurations in .env.

3️⃣ Run MongoDB Locally

Ensure MongoDB is running before starting the server.

4️⃣ Start the Server

Run the server using node server.js or npx nodemon server.js for development.

🛠️ API Endpoints

Provides endpoints for creating, retrieving, updating, and deleting data.

1️⃣ Create Data (POST)

Stores key-value pairs in the database.

2️⃣ Retrieve Data (GET)

Fetches stored values using a key.

3️⃣ Update Data (PUT)

Modifies existing records in the database.

4️⃣ Delete Data (DELETE)

Removes records from the database.

⚠️ Error Handling

Includes validation for required fields, checks for key existence, and database connection error handling.

✅ Final Checklist

✅ MongoDB is running
✅ .env contains MONGO_URI
✅ Installed dependencies (express, mongoose, dotenv)
✅ API is tested with ThunderClient/Postman

