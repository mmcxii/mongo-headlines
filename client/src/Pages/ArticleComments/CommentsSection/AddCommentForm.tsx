import React, { useEffect, useState } from 'react';

import { useForm } from 'Hooks';
import { Button } from 'Elements';

interface Props {
    articleId: string;
}

const AddCommentForm: React.FC<Props> = ({ articleId }) => {
    const [formWasSubmitted, setFormWasSubmitted] = useState(false);
    const [values, handleChange] = useForm({ user: '', message: '' });

    useEffect(() => {
        const addComment = async () => {
            const { user, message } = values;

            const response = await fetch(`/api/comments/${articleId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, message }),
            });

            const data = await response.json();

            console.log(data);
        };

        if (formWasSubmitted) {
            addComment();
        }
    }, [formWasSubmitted]);

    return (
        <form onSubmit={() => setFormWasSubmitted(true)}>
            <input type='text' name='user' required value={values.user} onChange={handleChange} />
            <textarea
                name='message'
                required
                value={values.message}
                onChange={handleChange}
                cols={30}
                rows={10}
            />

            <Button type='submit'>Add Comment</Button>
        </form>
    );
};

export default AddCommentForm;
