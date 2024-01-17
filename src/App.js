import './App.css';
import SplitScreen from './components/split-screen';

const Left = ({ title }) => {
  return <h2 style={{ backgroundColor: 'palegreen' }}>{title}</h2>;
};

const Right = ({ title }) => {
  return <h2 style={{ backgroundColor: 'blanchedalmond' }}>{title}</h2>;
};

function App() {
  return (
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
  );
}

export default App;
