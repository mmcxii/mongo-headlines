import React, { useEffect, useState } from 'react';

import { CommentProps } from 'Pages/Headlines';
import { blueBell, spacing } from 'Utilities';
import { CardBody } from 'Elements';
import AddCommentForm from './AddCommentForm';
import styled from 'styled-components';

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
                <SectionHeader>Comments</SectionHeader>

                {comments.length === 0 ? (
                    <p>This article has no comments.</p>
                ) : (
                    comments.map(comment => (
                        <Comment key={comment._id}>
                            <CommentUser>{comment.user}</CommentUser>
                            <p>{comment.message}</p>
                        </Comment>
                    ))
                )}
            </section>

            <AddCommentForm articleId={articleId} setCommentsShouldBeFetched={setCommentsShouldBeFetched} />
        </CardBody>
    );
};

export default CommentsSection;

const SectionHeader = styled.h3`
    color: ${blueBell};
    border-bottom: 1px solid ${blueBell};
`;

const Comment = styled.article`
    margin: ${spacing.sm};
`;

const CommentUser = styled.h3`
    color: ${blueBell};
    text-transform: capitalize;
`;
