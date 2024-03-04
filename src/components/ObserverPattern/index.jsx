import ParentComponent from './Parent';
import mitt from 'mitt';

export const emitter = mitt();

const ObserverPattern = () => {
  return (
    <>
      <ParentComponent />
    </>
  );
};

export default ObserverPattern;
