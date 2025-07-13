// index.js or server.js
const express = require('express');
const app = express();
require('dotenv').config(); // Load .env before anything else

const db = require('./db'); // MongoDB connection
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Routes
const personRouter = require('./routes/PersonRoutes');
const menuRouter = require('./routes/MenuRouter');

app.use('/person', personRouter);
app.use('/menuitems', menuRouter);

app.get('/', (req, res) => {
    res.send("Welcome to my Hotel! How can I help you?");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
