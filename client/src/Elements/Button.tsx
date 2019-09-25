import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rounded, fallingStar, blueBell, clearChill, spacing } from 'Utilities';

export const Button = styled.button`
    cursor: pointer;
    text-align: center;
    border-radius: ${rounded};
    border: none;
    padding: ${spacing.sm} ${spacing.md};
    margin: ${spacing.xs};
    font-weight: bolder;
    color: ${fallingStar};
    background: ${blueBell};
    transition: background ease-in 250ms;

    &:hover {
        background: ${clearChill};
    }
`;

export const ButtonLink = styled(Link)`
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: ${rounded};
    border: none;
    padding: ${spacing.sm} ${spacing.md};
    margin: ${spacing.xs};
    font-weight: bolder;
    color: ${fallingStar};
    background: ${blueBell};
    transition: background ease-in 250ms;

    &:hover {
        background: ${clearChill};
    }
`;
