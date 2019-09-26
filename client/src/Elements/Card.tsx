import styled from 'styled-components';

import { rounded, spacing, elevation, transition, sarawackWhitePaper, blueBell } from 'Utilities';

export const Card = styled.section`
    border-radius: ${rounded};
    background: ${sarawackWhitePaper};
    ${elevation[3]};
    ${transition({ prop: 'box-shadow' })};

    &:hover {
        ${elevation[4]};
    }
`;

export const CardHeader = styled.h3`
    padding: ${spacing.sm} 0;
    margin: 0 ${spacing.md};
    border-bottom: 2px solid ${blueBell};
    color: ${blueBell};
`;

export const CardBody = styled.div`
    font-size: 1.05rem;
    padding: ${spacing.md};
    display: flex;
    flex-direction: column;
`;
