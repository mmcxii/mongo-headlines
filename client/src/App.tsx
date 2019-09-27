import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';
import moment from 'moment';

import { Store } from './Store';
import { fallingStar, shipsOfficer, spacing } from 'Utilities';
import { Footer, Header } from 'Layout';
import Pages from 'Pages';

const App: React.FC = () => {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        const getArticlesFromLs = () => {
            const lsArticles = localStorage.getItem('savedArticles');
            if (lsArticles) {
                const data = lsArticles.split(',').slice(0, -1);

                return dispatch({ type: 'FETCH_DATA', payload: data });
            }
        };

        // Fetches new articles at 10 am
        if (moment().format('HH:mm') === '10:00') {
            fetch('/api/articles', {
                method: 'POST',
            });
        }

        getArticlesFromLs();
    }, []);

    return (
        <BrowserRouter>
            <AppWrapper>
                <Normalize />
                <GlobalStyles />

                <Header />

                <Pages />

                <Footer />
            </AppWrapper>
        </BrowserRouter>
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
