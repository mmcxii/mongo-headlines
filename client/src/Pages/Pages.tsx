import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'Layout';
import Headlines from './Headlines';
import ArticleComments from './ArticleComments';

interface Props {}

const Pages: React.FC<Props> = () => {
    return (
        <PageWrapper>
            <Switch>
                <Route exact path='/' component={Headlines} />
                <Route path='/article/:articleId' component={ArticleComments} />
            </Switch>
        </PageWrapper>
    );
};

export default Pages;

const PageWrapper = styled(Container).attrs({ as: 'main' })`
    grid-area: page;
`;
