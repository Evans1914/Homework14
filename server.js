require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const Storage = require("./models/model/Storage"); // Import Mongoose Model
const connectDB = require("./db")

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware for request body parsing

// Handle GET request
app.get('/evans', (req, res) => {
    res.send('My Name is Evans, Sir!');
});

// Fetch external API data
app.get('/test', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching test data', error: error.message });
    }
});

// Fetch cat facts
app.post("/api/cats", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// **CRUD Operations with MongoDB**

// Store Data (CREATE)
app.post('/store', async (req, res) => {
    try {
        const { key, value } = req.body;
        if (!key || !value) {
            return res.status(400).json({ message: 'Key and value are required' });
        }
        const newData = new Storage({ key, value });
        await newData.save();
        res.json({ message: 'Data stored successfully', data: newData });
    } catch (error) {
        res.status(500).json({ error: "Failed to store data", details: error.message });
    }
});

// Retrieve Data (READ)
app.get('/retrieve/:key', async (req, res) => {
    try {
        const key = req.params.key;
        const data = await Storage.findOne({ key });
        if (!data) {
            return res.status(404).json({ message: 'Key not found' });
        }
        res.json({ key: data.key, value: data.value });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve data", details: error.message });
    }
});

// Update Data (UPDATE)
app.put('/update/:key', async (req, res) => {
    try {
        const key = req.params.key;
        const { value } = req.body;
        const updatedData = await Storage.findOneAndUpdate({ key }, { value }, { new: true });

        if (!updatedData) {
            return res.status(404).json({ message: 'Key not found' });
        }
        res.json({ message: 'Data updated successfully', data: updatedData });
    } catch (error) {
        res.status(500).json({ error: "Failed to update data", details: error.message });
    }
});

// Delete Data (DELETE)
app.delete('/delete/:key', async (req, res) => {
    try {
        const key = req.params.key;
        const deletedData = await Storage.findOneAndDelete({ key });

        if (!deletedData) {
            return res.status(404).json({ message: 'Key not found' });
        }
        res.json({ message: 'Data deleted successfully', data: deletedData });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete data", details: error.message });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
