import React, { useRef } from 'react';
import { Input } from './Input';

const ForwardingRefs = () => {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button
        type='submit'
        className='button'
      >
        Submit
      </button>
    </form>
  );
};

export default ForwardingRefs;
