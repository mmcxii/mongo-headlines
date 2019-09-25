import React from 'react';
import styled from 'styled-components';

import { endingNavyBlue, fallingStar, spacing } from 'Utilities';
import Container from '../Container';
import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <Wrapper>
            <HeaderContainer>
                <Title>Mongo Headlines</Title>

                <Nav />
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${spacing.md};

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Title = styled.h1`
    letter-spacing: 2px;
`;
