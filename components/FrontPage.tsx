import React, { useState } from 'react';
import PageTemplate from './PageTemplate';

const FrontPage = () => {
    const [loading, setLoading] = useState(true);

    const content = (
        <div>
            <a href='/working-page'>Page 1</a>
            <a href='/error-text-in-page'>Page 2, where is a error text</a>
        </div>
    );

    return (
        <>
            <PageTemplate title={'Test application'} content={content} 
                   loading={loading} setLoading={setLoading} />
        </>
    );
};

export default FrontPage;