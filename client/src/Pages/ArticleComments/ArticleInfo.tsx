import React from 'react';
import styled from 'styled-components';

import { ArticleProps } from '../Headlines';

interface Props {
    article: ArticleProps;
}

const ArticleInfo: React.FC<Props> = ({ article }) => {
    const { title, abstract, updated_date } = article;
    return (
        <>
            <h2>{title}</h2>
            <small>{updated_date}</small>
            <p>{abstract}</p>
        </>
    );
};

export default ArticleInfo;
