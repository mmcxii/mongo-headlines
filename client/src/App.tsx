import React, { useEffect, useState } from 'react';
import './App.css';

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
    const [articles, setArticles] = useState<ArticleProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res: Response = await fetch('/api/articles');
                const data: [] = await res.json();

                setArticles(data);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                {articles.length > 0 && articles.map(article => <p key={article._id}>{article.title}</p>)}
            </header>
        </div>
    );
};

export default App;
