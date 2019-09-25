import React from 'react';
import styled from 'styled-components';

import { endingNavyBlue, fallingStar } from 'Utilities';
import Container from './Container';

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <Wrapper>
            <HeaderContainer>
                <Title>Mongo Headlines</Title>
            </HeaderContainer>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    grid-area: header;

    background: ${endingNavyBlue};
    color: ${fallingStar};
`;

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Title = styled.h1`
    letter-spacing: 2px;
`;
