import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset = 'utf-8' />
                <title>{props.title}</title>
                <meta name='description' content={props.descriptrion} />
    
            </Helmet>
        </HelmetProvider>
    )
}

Meta.defaultProps = {
    title: 'React 연습문제',
    description: 'React.js 예제 입니다',
}

export default Meta;