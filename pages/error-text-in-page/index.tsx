import React, { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate';

const IndexComponent = () => {
  const [loading, setLoading] = useState(true);
  
  const PageContent = (
      <div>An unexpected error occurred! Please try again after some time.</div>
  );

  return (
    <>
      <PageTemplate title={'Test page'} content={PageContent} loading={loading} setLoading={setLoading} />
    </>
  );
};

export default IndexComponent;
