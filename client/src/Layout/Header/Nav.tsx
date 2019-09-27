import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { spacing, fallingStar } from 'Utilities';

interface Props {}

const Nav: React.FC<Props> = () => {
    const navLinks: { page: string; route: string }[] = [
        {
            page: 'articles',
            route: '/',
        },
        {
            page: 'saved',
            route: '/saved',
        },
        {
            page: 'about',
            route: '/about',
        },
    ];

    return (
        <Navbar>
            <List>
                {navLinks.map(({ page, route }, index) => (
                    <Item key={index}>
                        <Link exact to={route}>
                            {page}
                        </Link>
                    </Item>
                ))}
            </List>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
    font-size: 1.25rem;
    line-height: 1.25rem;
    text-transform: capitalize;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const Item = styled.li`
    padding: 0 ${spacing.sm};

    &:not(:last-child) {
        border-right: 2px solid ${fallingStar};
    }
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }

    &.active {
        text-decoration: underline;
    }
`;
