import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'Layout';
import Headlines from './Headlines';

interface Props {}

const Pages: React.FC<Props> = () => {
    return (
        <PageWrapper>
            <Switch>
                <Route exact path='/' component={Headlines} />
            </Switch>
        </PageWrapper>
    );
};

export default Pages;

const PageWrapper = styled(Container).attrs({ as: 'main' })`
    grid-area: page;
`;
