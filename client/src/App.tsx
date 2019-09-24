import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import { Container, Footer, Header } from './Layout';
import { fallingStar, shipsOfficer, spacing } from './Utilities';

interface ArticleProps {
    _id: string;
    title: string;
    abstract: string;
    updated_date: Date;
    url: string;
    saved: boolean;
    comments: [];
}

const App: React.FC = () => {
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [articles, setArticles] = useState<ArticleProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            setDataLoading(true);
            try {
                const res: Response = await fetch('/api/articles');
                const data: [] = await res.json();

                setArticles(data);
                setDataLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <AppWrapper>
            <Normalize />
            <GlobalStyles />

            <Header />
            <PageWrapper>
                {dataLoading ? (
                    <p>Loading...</p>
                ) : (
                    articles.length > 0 && articles.map(article => <p key={article._id}>{article.title}</p>)
                )}
            </PageWrapper>
            <Footer />
        </AppWrapper>
    );
};

export default App;

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=News+Cycle|Spectral+SC&display=swap');

    :root {
        --ff-b: 'News Cycle', sans-serif;
        --ff-h: 'Spectral SC', serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${fallingStar};
        color: ${shipsOfficer};
        font-family: var(--ff-b);
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--ff-h);
    }
`;

const AppWrapper = styled.div`
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas: 'header' 'page' 'footer';
    grid-row-gap: ${spacing.sm};
    min-height: 100vh;
`;

const PageWrapper = styled(Container).attrs({ as: 'main' })`
    grid-area: page;
`;
