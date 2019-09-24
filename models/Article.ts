import { createSchema, Type, typedModel } from 'ts-mongoose';
import { CommentSchema } from './Comment';

// Create Schema
const ArticleSchema = createSchema({
    title: Type.string(),
    updated_date: Type.date(),
    abstract: Type.string(),
    url: Type.string(),
    saved: Type.boolean({ default: false }),
    comments: Type.array().of(Type.ref(Type.objectId()).to('comment', CommentSchema)),
});

const Article = typedModel('article', ArticleSchema);

export default Article;
