import React from 'react';
import Modal from './Modal';
import LargeBookListItem from './books/LargeListItem';
import SplitScreen from './split-screen';
import { books } from './data/books';
import Lists from './lists';

const Left = ({ title }) => {
  return <h2 style={{ backgroundColor: 'palegreen' }}>{title}</h2>;
};

const Right = ({ title }) => {
  return <h2 style={{ backgroundColor: 'blanchedalmond' }}>{title}</h2>;
};

function LayoutComponent() {
  return (
    <>
      <SplitScreen
        // Left={Left}       // components passed as props
        // Right={Right}
        leftCompWidth={1}
        rightCompWidth={2}
      >
        {/* passing components as children which is good practice */}
        <Left title='Left' />
        <Right title='Right' />
      </SplitScreen>

      <Modal>
        <LargeBookListItem books={books[0]} />
      </Modal>

      <Lists />
    </>
  );
}

export default LayoutComponent;
