import React, { useEffect, useState } from 'react';

import { ArticleProps, ArticleCard } from 'Pages/Headlines';

interface Props {}

const Saved: React.FC<Props> = () => {
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);
    const [savedArticles, setSavedArticles] = useState<ArticleProps[]>([]);

    useEffect(() => {
        setDataIsLoading(true);
        const lsArticles: string | null = localStorage.getItem('savedArticles');

        if (lsArticles) {
            const fetchSavedArticles = async () => {
                try {
                    const res: Response = await fetch(`/api/articles/saved/${lsArticles}`);
                    const data: [] = await res.json();

                    setSavedArticles(data);
                } catch (err) {
                    console.log(err.message);
                }
            };

            fetchSavedArticles();
        }

        setDataIsLoading(false);
    }, []);

    return (
        <section>
            <h2>Saved Articles</h2>
            {dataIsLoading ? (
                <p>Loading...</p>
            ) : savedArticles.length === 0 ? (
                <p>You don't have any saved articles on this device</p>
            ) : (
                savedArticles.map(article => <ArticleCard key={article._id} article={article} />)
            )}
        </section>
    );
};

export default Saved;
