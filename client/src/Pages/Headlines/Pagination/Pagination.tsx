import React from 'react';
import styled from 'styled-components';

import { spacing, blueBell, clearChill } from 'Utilities';
import { Button } from 'Elements';

interface Props {
    currentPage: number;
    numberOfArticles: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({ currentPage, numberOfArticles, setCurrentPage }) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i < numberOfArticles / 10; i++) {
        pageNumbers.push(i);
    }

    return (
        <List>
            {pageNumbers.map(number => (
                <Item key={number} id={`${number}`}>
                    <PageButton
                        data-testid={`pagination-${number}`}
                        current={currentPage === number}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </PageButton>
                </Item>
            ))}
        </List>
    );
};

export default Pagination;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.li`
    cursor: pointer;
    list-style: none;
    margin: 0 ${spacing.xs};
`;

const PageButton = styled(Button)<{ current: boolean }>`
    background: ${props => (props.current ? clearChill : blueBell)};
`;
