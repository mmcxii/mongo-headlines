require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

// Use Routes
app.use('/api/articles', require('./routes/api/articles'));

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        console.log(MONGODB_URI === process.env.MONGODB_URI ? 'mlab connected' : 'local mongoDB connected...')
    )
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
