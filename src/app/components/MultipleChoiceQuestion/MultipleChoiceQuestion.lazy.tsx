import React, { lazy, Suspense } from 'react';

const LazyMultipleChoiceQuestion = lazy(() => import('./MultipleChoiceQuestion'));

const MultipleChoiceQuestion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMultipleChoiceQuestion {...props} />
  </Suspense>
);

export default MultipleChoiceQuestion;
