import React from 'react';
import styled from 'styled-components';

import { ArticleProps } from './Headlines';

interface Props {
    article: ArticleProps;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
    return <p>{article.title}</p>;
};

export default ArticleCard;
