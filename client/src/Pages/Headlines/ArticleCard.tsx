import React, { useContext } from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import { Card, CardBody, CardHeader, ButtonLink, Button } from 'Elements';
import { ArticleProps } from './Headlines';
import { Store } from 'Store';

interface Props {
    article: ArticleProps;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
    const { state, dispatch } = useContext(Store);
    const { _id, title, abstract } = article;

    const saveArticle = (id: string) => {
        const lsArticles = localStorage.getItem('savedArticles');
        if (lsArticles) {
            const split = lsArticles.split(',').slice(0, -1);

            if (!split.includes(id)) {
                const newSavedArticles = lsArticles + `${id},`;
                localStorage.setItem('savedArticles', newSavedArticles);

                const data = newSavedArticles.split(',').slice(0, -1);
                return dispatch({ type: 'SAVE_ARTICLE', payload: data });
            }
        } else {
            localStorage.setItem('savedArticles', `${id},`);

            return dispatch({ type: 'SAVE_ARTICLE', payload: id });
        }
    };

    const unsaveArticle = (id: string) => {
        const lsArticles = localStorage.getItem('savedArticles');
        if (lsArticles) {
            const split = lsArticles.split(',').slice(0, -1);
            const data = split.filter(item => item !== id);

            let newSavedArticles = data.join(',');
            if (newSavedArticles.charAt(-1) !== ',' && newSavedArticles.length > 1) {
                newSavedArticles += ',';
            }
            localStorage.setItem('savedArticles', newSavedArticles);

            return dispatch({ type: 'UNSAVE_ARTICLE', payload: data });
        }
    };

    return (
        <Wrapper as='article'>
            <CardHeader>{title}</CardHeader>
            <CardBody>
                <p>{abstract}</p>
                <ButtonsWrapper>
                    {state.savedArticles.includes(_id) ? (
                        <Button onClick={() => unsaveArticle(_id)}>Unsave</Button>
                    ) : (
                        <Button onClick={() => saveArticle(_id)}>Save</Button>
                    )}
                    <ButtonLink to={`/article/${_id}`}>Comments</ButtonLink>
                </ButtonsWrapper>
            </CardBody>
        </Wrapper>
    );
};

export default ArticleCard;

const Wrapper = styled(Card)`
    margin: ${spacing.md} 0;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-self: flex-end;
    }
`;
