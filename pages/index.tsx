import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const IndexComponent = () => {
    const [loading, setLoading] = useState(true);

    const content = (
        <div>
            <a href='/working-page'>Page 1</a>
            <a href='/error-text-in-page'>Page 2</a>
        </div>
    );

    return (
        <>
            <PageTemplate title={'Test application'} content={content} 
                   loading={loading} setLoading={setLoading} />
        </>
    );
};

export default IndexComponent;