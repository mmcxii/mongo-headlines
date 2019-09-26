import React, { useEffect, useState } from 'react';

import { CommentProps } from 'Pages/Headlines';
import { blueBell } from 'Utilities';
import { CardBody } from 'Elements';
import AddCommentForm from './AddCommentForm';

interface Props {
    articleId: string;
}

const CommentsSection: React.FC<Props> = ({ articleId }) => {
    const [commentsShouldBeFetched, setCommentsShouldBeFetched] = useState<boolean>(true);
    const [comments, setComments] = useState<CommentProps[]>([]);

    useEffect(() => {
        const getComments = async () => {
            const response: Response = await fetch(`/api/comments/${articleId}`);
            const data = await response.json();

            setComments(data);
            setCommentsShouldBeFetched(false);
        };

        if (commentsShouldBeFetched) {
            getComments();
        }
    }, [commentsShouldBeFetched]);

    return (
        <CardBody>
            <section>
                <h3 style={{ color: blueBell }}>Comments</h3>
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
            </section>

            <AddCommentForm articleId={articleId} setCommentsShouldBeFetched={setCommentsShouldBeFetched} />
        </CardBody>
    );
};

export default CommentsSection;
