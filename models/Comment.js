const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = Comment = mongoose.model('comment', CommentSchema);
