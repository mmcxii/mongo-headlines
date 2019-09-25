import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import { Card, CardBody, CardHeader, ButtonLink } from 'Elements';
import { ArticleProps } from './Headlines';

interface Props {
    article: ArticleProps;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
    const { _id, title, abstract } = article;

    return (
        <Wrapper as='article'>
            <CardHeader>{title}</CardHeader>
            <CardBody>
                <p>{abstract}</p>
                <CommentButton to={`/article/${_id}`}>Comments</CommentButton>
            </CardBody>
        </Wrapper>
    );
};

export default ArticleCard;

const Wrapper = styled(Card)`
    margin: ${spacing.md} 0;
`;

const CommentButton = styled(ButtonLink)`
    @media screen and (min-width: 768px) {
        align-self: flex-end;
    }
`;
