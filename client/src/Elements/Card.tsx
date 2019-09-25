import styled from 'styled-components';

import { rounded, spacing, sarawackWhitePaper, blueBell, fallingStar } from 'Utilities';

export const Card = styled.section`
    border-radius: ${rounded};
    background: ${sarawackWhitePaper};
    overflow: hidden;
`;

export const CardHeader = styled.h3`
    width: 100%;
    padding: ${spacing.sm} ${spacing.md};
    border-radius: ${rounded};
    background: ${blueBell};
    color: ${fallingStar};
`;

export const CardBody = styled.div`
    padding: ${spacing.md};
    display: flex;
    flex-direction: column;
`;
