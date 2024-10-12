import React, { lazy, Suspense } from 'react';

const LazyMultipleChoiceQuestion = lazy(() => import('./MultipleChoiceQuestion'));

const MultipleChoiceQuestion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMultipleChoiceQuestion questionNumber={0} questionTitle='' {...props} />
  </Suspense>
);

export default MultipleChoiceQuestion;
