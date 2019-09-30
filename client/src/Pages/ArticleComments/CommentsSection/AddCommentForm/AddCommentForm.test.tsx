import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import AddCommentForm from './AddCommentForm';

afterEach(cleanup);

test('<AddCommentForm /> test', () => {
    let commentsShouldBeFetched: boolean = false;
    const setCommentsShouldBeFetched = () => (commentsShouldBeFetched = true);

    const { getByTestId } = render(
        <AddCommentForm articleId='testArticleId' setCommentsShouldBeFetched={setCommentsShouldBeFetched} />
    );

    const addCommentSubmitButton = getByTestId('addCommentSubmitButton');
    const addCommentForm = getByTestId('addCommentForm');

    // Testing that the submit button changes state
    fireEvent.click(addCommentSubmitButton);
    expect(commentsShouldBeFetched).toBe(true);
    cleanup();

    // Testing that the form submission changes state
    fireEvent.submit(addCommentForm);
    expect(commentsShouldBeFetched).toBe(true);
});
