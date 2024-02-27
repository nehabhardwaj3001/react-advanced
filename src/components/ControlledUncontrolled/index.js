import React, { useState } from 'react';
import { ControlledFlow } from './ControlledFlow';

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: 'TestName' })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: 'Poland' })}>Next</button>
    </>
  );
};

const ControlledUncontrolled = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  console.log('data', data);

  return (
    <>
      <ControlledFlow
        currentStepIndex={currentStepIndex}
        onNext={next}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
};

export default ControlledUncontrolled;
