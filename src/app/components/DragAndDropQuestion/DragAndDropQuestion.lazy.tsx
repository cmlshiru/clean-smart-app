import React, { lazy, Suspense } from 'react';

const LazyDragAndDropQuestion = lazy(() => import('./DragAndDropQuestion'));

const DragAndDropQuestion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDragAndDropQuestion questionNumber={0} questionTitle='' {...props} />
  </Suspense>
);

export default DragAndDropQuestion;
