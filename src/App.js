import './App.css';
import Modal from './components/Modal';
import LargeBookListItem from './components/books/LargeListItem';
import { books } from './components/data/books';
import Lists from './components/lists';
import SplitScreen from './components/split-screen';

const Left = ({ title }) => {
  return <h2 style={{ backgroundColor: 'palegreen' }}>{title}</h2>;
};

const Right = ({ title }) => {
  return <h2 style={{ backgroundColor: 'blanchedalmond' }}>{title}</h2>;
};

function App() {
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

export default App;
