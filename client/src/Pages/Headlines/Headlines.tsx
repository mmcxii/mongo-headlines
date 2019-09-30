import React, { useEffect, useState } from 'react';

import { useScrollToTop } from 'Hooks';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

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
    const [currentPage, setCurrentPage] = useState<number>(1);

    useScrollToTop(currentPage);

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

    //* Pagination
    const indexOfLastArticle = currentPage * 10;
    const indexOfFirstArticle = indexOfLastArticle - 10;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <>
            <section>
                <h2>Current Headlines</h2>
                {dataIsLoading ? (
                    <p>Loading...</p>
                ) : (
                    articles.length > 0 &&
                    currentArticles.map(article => <ArticleCard key={article._id} article={article} />)
                )}
            </section>

            <Pagination
                currentPage={currentPage}
                numberOfArticles={articles.length}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default Headlines;
