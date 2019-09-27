import { createSchema, Type, typedModel } from 'ts-mongoose';

export const CommentSchema = createSchema({
    article: Type.string(),
    user: Type.string(),
    message: Type.string(),
    postedAt: Type.date({ default: Date.now as any }),
});

const Comment = typedModel('comment', CommentSchema);

export default Comment;
