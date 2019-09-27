import React from 'react';

import TechStack from './TechStack';
import { Card, CardBody } from 'Elements';

interface Props {}

const About: React.FC<Props> = () => {
    return (
        <Card>
            <TechStack />
            <CardBody>
                <p>
                    Mongo Headlines is built using the MERN stack of technologies. It uses a{' '}
                    <a href='https://nodejs.org/en/' target='blank'>
                        NodeJS <i className='far fa-external-link'></i>
                    </a>{' '}
                    powered backend, and the{' '}
                    <a href='https://www.npmjs.com/package/express' target='blank'>
                        Express <i className='far fa-external-link'></i>
                    </a>{' '}
                    framework for its server. The database is{' '}
                    <a href='https://www.mongodb.com/' target='blank'>
                        MongoDB <i className='far fa-external-link'></i>
                    </a>
                    , connected to the server with the{' '}
                    <a href='https://www.npmjs.com/package/mongoose' target='blank'>
                        Mongoose <i className='far fa-external-link'></i>
                    </a>{' '}
                    framework. The frontend is built with the{' '}
                    <a href='https://reactjs.org/' target='blank'>
                        React <i className='far fa-external-link'></i>
                    </a>{' '}
                    library, utilizing Hooks and{' '}
                    <a href='https://www.styled-components.com/' target='blank'>
                        Styled-Components <i className='far fa-external-link'></i>
                    </a>{' '}
                    for its functionality and styling. Mongo Headlines is hosted on{' '}
                    <a href='https://www.heroku.com' target='blank'>
                        Heroku <i className='far fa-external-link'></i>
                    </a>{' '}
                    and the code is available for review on{' '}
                    <a href='https://github.com/mmcxii/mongo-headlines' target='blank'>
                        Github <i className='far fa-external-link'></i>
                    </a>
                    .
                </p>
                <p>
                    Additionally, both the front and back ends are built using{' '}
                    <a href='https://www.typescriptlang.org/' target='blank'>
                        TypeScript <i className='far fa-external-link'></i>
                    </a>
                    .
                </p>
                <br />
                <p>
                    This was my first project using the MERN stack on my own, and I thoroughly enjoyed the
                    process. Both the front and back ends are enjoyable to write, and by implementing
                    TypeScript I feel like I have such complete control and security in what I am writing.
                </p>
            </CardBody>
        </Card>
    );
};

export default About;
