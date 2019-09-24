import { createSchema, Type, typedModel } from 'ts-mongoose';

export const CommentSchema = createSchema({
    user: Type.string(),
    message: Type.string(),
});

const Comment = typedModel('comment', CommentSchema);

export default Comment;