import React, { useState } from 'react';
import Counter from './Counter';

const Keys = () => {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span> <Counter key='shirts' />{' '}
        </>
      ) : (
        <>
          <span>Shoes counts: </span> <Counter key='shoes' />{' '}
        </>
      )}
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
};

export default Keys;
