import React, { useEffect, useState } from 'react';

import ArticleCard from './ArticleCard';

export interface ArticleProps {
    _id: string;
    title: string;
    abstract: string;
    updated_date: Date;
    url: string;
}

export interface CommentProps {
    _id: string;
    article: string;
    user: string;
    message: string;
    postedAt: Date;
}

interface Props {}

const Headlines: React.FC<Props> = () => {
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);
    const [articles, setArticles] = useState<ArticleProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            setDataIsLoading(true);

            try {
                const res: Response = await fetch('/api/articles');
                const data: [] = await res.json();
                const displayArticles = await data.slice(0, 11);

                setArticles(displayArticles);
                setDataIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <section>
            <h2>Current Headlines</h2>
            {dataIsLoading ? (
                <p>Loading...</p>
            ) : (
                articles.length > 0 &&
                articles.map(article => <ArticleCard key={article._id} article={article} />)
            )}
        </section>
    );
};

export default Headlines;
