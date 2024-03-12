import React from 'react';
import { Child } from './Child';
import { ErrorBoundary } from './ErrorBoundry';

const ErrorBoundaries = () => {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error in child</h1>}>
        <Child />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaries;
