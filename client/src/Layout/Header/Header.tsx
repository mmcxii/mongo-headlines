import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { endingNavyBlue, fallingStar, spacing } from 'Utilities';
import Container from '../Container';
import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <Wrapper>
            <HeaderContainer>
                <Logo to='/'>
                    <Title>Mongo Headlines</Title>
                    <Subtitle>Fresh rage, every day.</Subtitle>
                </Logo>

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

const Logo = styled(Link)`
    margin: ${spacing.sm} 0;
    color: inherit;
    text-decoration: none;
`;

const Title = styled.h1`
    letter-spacing: 2px;
    margin: 0;
`;

const Subtitle = styled.p`
    font-family: var(--ff-h);
    letter-spacing: 1px;
`;
