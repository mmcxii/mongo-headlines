import React from 'react';
import styled from 'styled-components';

import { CardHeader, CardBody } from 'Elements';
import { ArticleProps } from '../Headlines';

interface Props {
    article: ArticleProps;
}

const ArticleInfo: React.FC<Props> = ({ article }) => {
    const { title, abstract, updated_date } = article;
    return (
        <>
            <CardHeader as='h2'>{title}</CardHeader>
            <CardBody>
                {/* TODO: Use Moment.js to format date */}
                <small>{updated_date}</small>
                <p>{abstract}</p>
            </CardBody>
        </>
    );
};

export default ArticleInfo;
