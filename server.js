// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./auth');
const connectDB = require('./db'); // Import the connectDB function

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();  // Use the connectDB function to connect to the database

// Routes
app.use('/mobileauth/api', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
