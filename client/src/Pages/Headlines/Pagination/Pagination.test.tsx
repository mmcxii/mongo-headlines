import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import Pagination from './Pagination';

afterEach(cleanup);

// @ts-ignore
global.scrollTo = jest.fn();

test('<Pagination /> tests', () => {
    //* Arrange
    let currentPage: number = 1;
    const setCurrentPage = () => (currentPage = 3);

    //* Act
    const { getByTestId, rerender } = render(
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfArticles={40} />
    );

    //* Assert
    // Confirm that first pagination button has active styling
    expect(getByTestId('pagination-1')).toHaveStyleRule('background', '#1B9CFC');

    // Simulate click on page three button
    // and confirm that third page is rendered and
    // document scrolls back to top
    fireEvent.click(getByTestId('pagination-3'));
    expect(currentPage).toBe(3);
    expect(window.scrollY).toBe(0);

    // Rerender
    rerender(<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfArticles={40} />);

    // Confirm that third pagination button has active styling
    expect(getByTestId('pagination-3')).toHaveStyleRule('background', '#1B9CFC');
});
