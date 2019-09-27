import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import { CardHeader } from 'Elements';

interface Props {}

const TechStack: React.FC<Props> = () => {
    const stack: { name: string; icon: string; color: string }[] = [
        {
            name: 'MongoDB',
            icon: 'fas fa-database',
            color: '#69B057',
        },
        {
            name: 'Express',
            icon: 'fas fa-server',
            color: '#222',
        },
        {
            name: 'React',
            icon: 'fab fa-react',
            color: '#61DAFB',
        },
        {
            name: 'NodeJS',
            icon: 'fab fa-node-js',
            color: '#8CC84B',
        },
    ];

    return (
        <Stack>
            {stack.map(item => (
                <Item key={item.name} color={item.color}>
                    <Icon className={item.icon} />
                    <Name>{item.name}</Name>
                </Item>
            ))}
        </Stack>
    );
};

export default TechStack;

const Stack = styled(CardHeader).attrs({ as: 'section' })`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${spacing.xs};
    text-align: center;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
    }
`;

const Item = styled.article<{ color: string }>`
    display: flex;
    flex-direction: column;
    color: ${props => props.color};
`;

const Icon = styled.i`
    font-size: 1.75rem;

    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Name = styled.h3`
    font-size: 1.5rem;

    @media screen and (min-width: 768px) {
        font-size: 1.75rem;
    }
`;
