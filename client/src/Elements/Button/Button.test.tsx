import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Button, ButtonLink } from './Button';

describe('<Button /> tests', () => {
    it('renders a button with the text `hello`', () => {
        //* Arrange
        let greeting = 'hello';
        const sayHi = () => (greeting = 'hi');

        //* Act
        const { container, getByTestId, rerender } = render(
            <Button data-testid='testButton' onClick={sayHi}>
                {greeting}
            </Button>
        );
        const testButton = container.firstChild;

        //* Assert
        expect(testButton).toMatchSnapshot();
        fireEvent.click(getByTestId('testButton'));
        rerender(
            <Button data-testid='testButton' onClick={sayHi}>
                {greeting}
            </Button>
        );
        expect(getByTestId('testButton').textContent).toBe('hi');
    });
});

describe('<ButtonLink /> tests', () => {
    it('renders a link to the homepage with button stylings', () => {
        //* Act
        const { container } = render(
            <Router>
                <ButtonLink to='/'>Home</ButtonLink>
            </Router>
        );

        //* Assert
        expect(container.firstChild).toMatchSnapshot();
    });
});
