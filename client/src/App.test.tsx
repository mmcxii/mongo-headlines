import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

test('renders without crashing', () => {
    // @ts-ignore
    global.scrollTo = jest.fn();
    window.scrollTo = jest.fn();

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
