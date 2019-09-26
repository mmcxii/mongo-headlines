import React from 'react';
import styled from 'styled-components';

import { spacing, mangentaPurple, fieryFuchsia, transition } from 'Utilities';

interface Props {}

const Social: React.FC<Props> = () => {
    const links: { link: string; icon: string }[] = [
        {
            link: 'https://www.secord.io',
            icon: 'fas fa-browser',
        },
        {
            link: 'https://www.github.com/mmcxii',
            icon: 'fab fa-github',
        },
        {
            link: 'https://www.linkedin.com/in/mmcxii',
            icon: 'fab fa-linkedin-in',
        },
        {
            link: 'https://www.twitter.com/mmcxii__',
            icon: 'fab fa-twitter',
        },
    ];

    return (
        <List>
            {links.map((social, index) => (
                <Item key={index}>
                    <Link href={social.link}>
                        <Icon className={social.icon} />
                    </Link>
                </Item>
            ))}
        </List>
    );
};

export default Social;

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const Item = styled.li`
    margin: 0 ${spacing.sm};
`;

const Link = styled.a.attrs({ target: 'blank' })`
    text-decoration: none;
    color: inherit;
`;

const Icon = styled.i`
    font-size: 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 2.5rem;
    background: ${mangentaPurple};
    border-radius: 50%;
    text-align: center;
    ${transition({ prop: 'background' })};

    &:hover {
        background: ${fieryFuchsia};
    }
`;
