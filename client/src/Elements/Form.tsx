import styled from 'styled-components';

import { spacing, rounded, fallingStar } from 'Utilities';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > input,
    > textarea,
    > div {
        margin: ${spacing.xs} 0;
    }
`;

export const Label = styled.label`
    padding-left: ${spacing.sm};
`;

export const Input = styled.input`
    border-radius: ${rounded};
    border: none;
    padding: ${spacing.sm} ${spacing.md};
    background: ${fallingStar};
`;

export const TextArea = styled.textarea`
    border-radius: ${rounded};
    border: none;
    padding: ${spacing.sm} ${spacing.md};
    background: ${fallingStar};
`;
