import React, { useState } from 'react';
import { UncontrolledForm } from './UncontrolledForm';
import ControlledForm from './ControlledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { UncontrolledFlow } from './UncontrolledFlow';
import { ControlledFlow } from './ControlledFlow';

const UncontrolledStepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={next}>Next</button>
    </>
  );
};
const UncontrolledStepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={next}>Next</button>
    </>
  );
};
const UncontrolledStepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={next}>Next</button>
    </>
  );
};

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
  const [shouldShow, setShouldShow] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UncontrolledModal />
      <>
        <ControlledModal
          shouldShow={shouldShow}
          close={() => setShouldShow(false)}
        >
          <h1>This is Modal Content</h1>
        </ControlledModal>
        <button onClick={() => setShouldShow(!shouldShow)}>
          {shouldShow ? 'Hide Modal' : 'Open Modal'}
        </button>
      </>
      <>
        <UncontrolledFlow>
          <UncontrolledStepOne />
          <UncontrolledStepTwo />
          <UncontrolledStepThree />
        </UncontrolledFlow>
      </>
      {/* <ControlledFlow
        currentStepIndex={currentStepIndex}
        onNext={next}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow> */}
    </>
  );
};

export default ControlledUncontrolled;
