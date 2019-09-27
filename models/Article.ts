import { createSchema, Type, typedModel } from 'ts-mongoose';

// Create Schema
const ArticleSchema = createSchema({
    title: Type.string(),
    updated_date: Type.date(),
    abstract: Type.string(),
    url: Type.string(),
});

const Article = typedModel('article', ArticleSchema);

export default Article;
