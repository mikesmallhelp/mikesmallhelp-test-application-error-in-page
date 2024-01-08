import React, { useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { fetchData } from '../util/util';

const PageTemplate = ({ title, content, loading, setLoading }:
    { title: string, content: ReactNode, loading: boolean, setLoading: Dispatch<SetStateAction<boolean>> }) => {

    useEffect(() => {
        fetchData('200', setLoading);
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{title}</h1>

                    {content}
                </div>
            )}
        </>
    );
};

export default PageTemplate;
