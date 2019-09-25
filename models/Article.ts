import { createSchema, Type, typedModel } from 'ts-mongoose';

// Create Schema
const ArticleSchema = createSchema({
    title: Type.string(),
    updated_date: Type.date(),
    abstract: Type.string(),
    url: Type.string(),
    saved: Type.boolean({ default: false }),
});

const Article = typedModel('article', ArticleSchema);

export default Article;
