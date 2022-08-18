// import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div>
      <FirstComponent firstName="Doe" lastName="Jane" hairColor="Black" age={45} />
      <FirstComponent firstName="Smith" lastName="John" hairColor="Brown" age={88} />
      <FirstComponent firstName="Fillmore" lastName="Millard" hairColor="Brown" age={50} />
      <FirstComponent firstName="Smith" lastName="Maria" hairColor="Brown" age={62} />

    </div>
  );
}

export default App;
