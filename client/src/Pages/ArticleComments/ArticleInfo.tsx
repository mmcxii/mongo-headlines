import React from 'react';
import moment from 'moment';

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
                <small>{moment(updated_date).format('MMMM Do, YYYY, HH:mm')}</small>
                <p>{abstract}</p>
            </CardBody>
        </>
    );
};

export default ArticleInfo;
