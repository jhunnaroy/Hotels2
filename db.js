const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/Hotels'; // Use quotes and correct syntax

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,       // Correct spelling
    useUnifiedTopology: true
})

// get the default connection
// MongoDb maintains a default connection object representng the MongDB 

const db = mongoose.connection;

// Define the event listeners for database connection
db.on('connected', () => {
    console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB server disconnected');
});

module.exports = db;