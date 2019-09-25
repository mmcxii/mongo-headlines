import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { ArticleProps } from 'Pages/Headlines';
import ArticleInfo from './ArticleInfo';
import CommentsSection from './CommentsSection';

interface Props extends RouteComponentProps<{ articleId: string }> {}

const ArticleComments: React.FC<Props> = ({
    match: {
        params: { articleId },
    },
}) => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [article, setArticle] = useState<ArticleProps | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            setDataIsLoading(true);

            try {
                const response: Response = await fetch(`/api/articles/${articleId}`);
                const data: ArticleProps[] = await response.json();
                const article: ArticleProps = await data[0];

                setArticle(article);
                setDataIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchArticle();
    }, []);

    return (
        <>
            {dataIsLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {article && (
                        <>
                            <ArticleInfo article={article} />
                            <CommentsSection articleId={articleId} />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default withRouter(ArticleComments);
