import { Router } from 'express';

import Comment from '../../models/Comment';

const router = Router();

// @route  GET api/comments
// @desc   Get all comments for a given article
// @access Public
router.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    try {
        const response = await Comment.find({ article: _id });

        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
});

// @route  POST api/comments/:articleId
// @desc   Post new comment to a given article
// @access Public
router.post('/:_id', async (req, res) => {
    const { _id } = req.params;
    const { user, message }: { user: string; message: string } = req.body;

    try {
        const newComment = new Comment({ article: _id, user, message });

        newComment.save();

        res.status(200).json({ newComment });
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
});

module.exports = router;
