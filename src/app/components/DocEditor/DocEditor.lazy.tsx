import React, { lazy, Suspense } from 'react';

const LazyDocEditor = lazy(() => import('./DocEditor'));

const DocEditor = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDocEditor {...props} />
  </Suspense>
);

export default DocEditor;
