// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.Local_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.log('❌ Connection error:', err.message));

// Get the default connection
const db = mongoose.connection;

// Optional: event listeners
db.on('connected', () => {
    console.log('🔗 MongoDB connected');
});

db.on('error', (err) => {
    console.log('❗ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});

module.exports = db;
