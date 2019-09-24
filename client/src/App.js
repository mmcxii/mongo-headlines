import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {articlesLoading ? (
                    <p>loading...</p>
                ) : (
                    articles.map(article => <p key={article._id}>{article.title}</p>)
                )}
            </header>
        </div>
    );
};

export default App;
