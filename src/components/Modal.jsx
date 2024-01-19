import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #00000067;
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0.5; */
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  overflow: auto;
`;
const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
