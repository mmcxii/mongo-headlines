import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Headlines from './Headlines';

afterEach(cleanup);

test('<Headlines /> tests', () => {
    //* Arrange
    // @ts-ignore
    global.scrollTo = jest.fn();
    window.scrollTo = jest.fn();

    //* Act
    const { container } = render(<Headlines />);
    const component = container.firstChild;

    //* Assert
    expect(component).toMatchSnapshot();
});
