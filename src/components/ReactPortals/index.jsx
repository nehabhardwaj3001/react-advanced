import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledAlert = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  translate: -50%;
  background-color: aquamarine;
  color: black;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const ReactPortals = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'absolute', marginTop: '200px' }}>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert
        show={show}
        onClose={() => setShow(false)}
      >
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
};

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <StyledAlert onClick={onClose}>{children}</StyledAlert>,
    document.querySelector('#alert-holder')
  );
};

export default ReactPortals;
