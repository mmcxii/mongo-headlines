import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;
config();

// Body Parser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

// Use Routes
app.use('/api/articles', require('./routes/api/articles'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    // Send all routes to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Connect to database
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        console.log(MONGODB_URI === process.env.MONGODB_URI ? 'mlab connected' : 'local mongoDB connected...')
    )
    .catch((err: any) => console.log(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
