import React, { useEffect, useState } from 'react';

import { CommentProps } from 'Pages/Headlines';

import AddCommentForm from './AddCommentForm';

interface Props {
    articleId: string;
}

const CommentsSection: React.FC<Props> = ({ articleId }) => {
    const [comments, setComments] = useState<CommentProps[]>([]);

    useEffect(() => {
        const getComments = async () => {
            const response: Response = await fetch(`/api/comments/${articleId}`);
            const data = await response.json();

            setComments(data);
        };

        getComments();
    }, []);

    return (
        <>
            {comments.length === 0 ? (
                <p>This article has no comments.</p>
            ) : (
                comments.map(comment => (
                    <article key={comment._id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.message}</p>
                    </article>
                ))
            )}

            <AddCommentForm articleId={articleId} />
        </>
    );
};

export default CommentsSection;
