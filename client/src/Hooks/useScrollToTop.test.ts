import { useScrollToTop } from './useScrollToTop';
import { cleanup } from '@testing-library/react';
import testHook from './TestHook';

// @ts-ignore
global.scrollTo = jest.fn();

afterEach(cleanup);

test('useScrollToTop tests', () => {
    //* Arrange
    let testVal = 0;
    testVal = 1;

    //* Act
    testHook(() => useScrollToTop(testVal));

    //* Assert
    expect(window.scrollY).toBe(0);
});
