import React, { useEffect, useState } from 'react';

import { useForm } from 'Hooks';
import { Button, Form, Input, Label, TextArea } from 'Elements';

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
        <Form
            onSubmit={e => {
                e.preventDefault();
                setFormWasSubmitted(true);
            }}
        >
            <Label htmlFor='user'>Name</Label>
            <Input
                type='text'
                name='user'
                placeholder='Your name'
                required
                value={values.user}
                onChange={handleChange}
            />

            <Label htmlFor='message'>Comment</Label>
            <TextArea
                name='message'
                placeholder='Your comment'
                required
                value={values.message}
                onChange={handleChange}
                cols={30}
                rows={10}
            />

            <Button type='submit'>Add Comment</Button>
        </Form>
    );
};

export default AddCommentForm;
