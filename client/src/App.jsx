import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import { Footer, Header } from 'layout';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [articlesLoading, setArticlesLoading] = useState(false);

    useEffect(() => {
        const getArticles = async () => {
            try {
                setArticlesLoading(true);
                const res = await fetch('/api/articles');
                const data = await res.json();

                setArticles(data);
                setArticlesLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        getArticles();
    }, []);

    return (
        <AppWrapper>
            <Header />
            <PageWrapper>
                <img src={logo} className='App-logo' alt='logo' />
                {articlesLoading ? (
                    <p>loading...</p>
                ) : (
                    articles.map(article => (
                        <p key={article._id}>
                            <a href={article.url} target='blank'>
                                {article.title}
                            </a>
                        </p>
                    ))
                )}
            </PageWrapper>
            <Footer />
        </AppWrapper>
    );
};

export default App;

const AppWrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: var(--margin) 1fr var(--margin);
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
        '. header .'
        '. content .'
        '. footer .';
`;

const PageWrapper = styled.main`
    grid-area: content;
`;
