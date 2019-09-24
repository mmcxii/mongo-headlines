import React from 'react';
import styled from 'styled-components';

import { endingNavyBlue, fallingStar, spacing } from '../Utilities';
import Container from './Container';
import Social from './Social';

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <Wrapper>
            <FooterContainer>
                <Byline>Nich Secord &copy;2019</Byline>

                <Social />
            </FooterContainer>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    grid-area: footer;

    background: ${endingNavyBlue};
    color: ${fallingStar};
    font-family: var(--ff-h);
    padding: ${spacing.md} 0;
`;

const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Byline = styled.p`
    font-style: italic;
`;
