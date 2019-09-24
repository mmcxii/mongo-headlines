const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
    },
    updated_date: {
        type: Date,
    },
    abstract: {
        type: String,
    },
    url: {
        type: String,
    },
    saved: {
        type: Boolean,
        default: false,
    },
    comments: {
        type: Array,
        default: [],
    },
});

module.exports = Article = mongoose.model('article', ArticleSchema);
