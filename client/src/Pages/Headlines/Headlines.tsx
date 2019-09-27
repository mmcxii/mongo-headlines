import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useScrollToTop } from 'Hooks';
import { spacing, clearChill, blueBell } from 'Utilities';
import { Button } from 'Elements';
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
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(articles.length / 10); i++) {
        pageNumbers.push(i);
    }

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

            <Pagination>
                {pageNumbers.map(number => (
                    <PaginationItem key={number} id={`${number}`}>
                        <PaginationButton
                            current={currentPage === number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </PaginationButton>
                    </PaginationItem>
                ))}
            </Pagination>
        </>
    );
};

export default Headlines;

const Pagination = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const PaginationItem = styled.li`
    cursor: pointer;
    list-style: none;
    margin: 0 ${spacing.xs};
`;

const PaginationButton = styled(Button)<{ current: boolean }>`
    background: ${props => (props.current ? clearChill : blueBell)};
`;
