import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'Layout';
import About from './About';
import ArticleComments from './ArticleComments';
import Headlines from './Headlines';
import Saved from './Saved';

interface Props {}

const Pages: React.FC<Props> = () => {
    return (
        <PageWrapper>
            <Switch>
                <Route exact path='/' component={Headlines} />
                <Route path='/article/:articleId' component={ArticleComments} />
                <Route path='/about' component={About} />
                <Route path='/saved' component={Saved} />
            </Switch>
        </PageWrapper>
    );
};

export default Pages;

const PageWrapper = styled(Container).attrs({ as: 'main' })`
    grid-area: page;
`;
