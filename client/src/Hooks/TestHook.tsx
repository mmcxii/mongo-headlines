import React from 'react';
import { render } from '@testing-library/react';

/*
 A function to test hooks in a vaccum
 */

const TestHook: ({ callback }: { callback: any }) => null = ({ callback }: { callback: any }) => {
    callback();
    return null;
};

const testHook = (callback: any) => {
    render(<TestHook callback={callback} />);
};

export default testHook;
