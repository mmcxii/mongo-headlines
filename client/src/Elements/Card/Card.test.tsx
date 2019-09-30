import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardHeader, CardBody } from './Card';

describe('<Card /> tests', () => {
    it('should render a card with a header and body', () => {
        //* Act
        const { container } = render(
            <Card>
                <CardHeader>Test Card</CardHeader>
                <CardBody>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolores esse harum
                        voluptates laborum autem necessitatibus amet eveniet quo incidunt, ab inventore quidem
                        at! Delectus sed molestias accusantium libero eos.
                    </p>
                </CardBody>
            </Card>
        );

        //* Assert
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a card as an article with an h2 header and a body as a p', () => {
        //* Act
        const { container } = render(
            <Card as='article'>
                <CardHeader as='h2'>Test Card Two</CardHeader>
                <CardBody as='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis modi velit commodi!
                    Ullam est odit in beatae ratione qui ex exercitationem ipsam explicabo, quidem quas,
                    commodi magni. Ratione, tempora. Aperiam.
                </CardBody>
            </Card>
        );

        //* Assert
        expect(container.firstChild).toMatchSnapshot();
    });
});
