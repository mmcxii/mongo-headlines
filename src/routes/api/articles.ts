import { Router } from 'express';
import axios from 'axios';
import Article from '../../models/Article';

const router = Router();

// @route  GET api/articles
// @desc   Get all articles
// @access Public
router.get('/', async (req, res) => {
    try {
        const response = await Article.find().sort({ updated_date: -1 });

        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
});

// @route  POST api/articles
// @desc   Post new articles to database
// @access Public
router.post('/', async (req, res) => {
    try {
        // Get top stories from NYT API
        const response: { data: { results: [] } } = await axios.get(
            'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + process.env.NYT_API_KEY
        );

        // Isolate the results
        const data: { results: [] } = await response.data;
        const results: [] = await data.results;

        // Loop over results
        results.forEach(article => {
            // Extract data we wish to store in db
            const { title, abstract, url, updated_date } = article;

            // Create a new Article object with the extracted data
            const newArticle = new Article({ title, abstract, url, updated_date });

            // Check if an article with that title already exists
            const checkIfPresent = () => {
                Article.find({ title: newArticle.title }, (err, docs) => {
                    if (!docs.length) {
                        newArticle.save();
                    }
                });
            };

            checkIfPresent();
        });

        // Return a 200 so the client knows the action was successful
        res.sendStatus(200);
    } catch (err) {
        console.log(err);

        // If there was an error, send a 404 so the client knows there was an error
        res.sendStatus(404);
    }
});

module.exports = router;
