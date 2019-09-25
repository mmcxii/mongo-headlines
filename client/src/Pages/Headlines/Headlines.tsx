import React, { useEffect, useState } from 'react';

import ArticleCard from './ArticleCard';

export interface ArticleProps {
    _id: string;
    title: string;
    abstract: string;
    updated_date: Date;
    url: string;
    saved: boolean;
    comments: [];
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

                setArticles(data);
                setDataIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <>
            {dataIsLoading ? (
                <p>Loading...</p>
            ) : (
                articles.length > 0 &&
                articles.map(article => <ArticleCard key={article._id} article={article} />)
            )}
        </>
    );
};

export default Headlines;
