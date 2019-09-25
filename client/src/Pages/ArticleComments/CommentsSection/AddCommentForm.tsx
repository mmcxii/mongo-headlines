import React, { useEffect, useState } from 'react';

import { useForm } from 'Hooks';
import { Button } from 'Elements';

interface Props {
    articleId: string;
    setCommentsShouldBeFetched: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCommentForm: React.FC<Props> = ({ articleId, setCommentsShouldBeFetched }) => {
    const [formWasSubmitted, setFormWasSubmitted] = useState(false);
    const [values, handleChange] = useForm({ user: '', message: '' });

    useEffect(() => {
        const addComment = () => {
            const { user, message } = values;

            fetch(`/api/comments/${articleId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, message }),
            });

            setFormWasSubmitted(false);
            setCommentsShouldBeFetched(true);
            values.user = '';
            values.message = '';
        };

        if (formWasSubmitted) {
            addComment();
        }
    }, [formWasSubmitted]);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setFormWasSubmitted(true);
            }}
        >
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
