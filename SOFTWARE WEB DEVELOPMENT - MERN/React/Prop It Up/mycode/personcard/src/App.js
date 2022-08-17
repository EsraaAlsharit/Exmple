import './App.css';
import FirstComponent from './components/FirstComponent';


function App() {
  return (

    <div>
      <FirstComponent name="Doe, Jane" HairColor="Black" age={45} />
      <FirstComponent name="Smith, John" HairColor="Brown" age={88} />
      <FirstComponent name="Fillmore, Millard" HairColor="Brown" age={50} />
      <FirstComponent name="Smith, Maria" HairColor="Brown" age={62} />

    </div>



  );
}

export default App;
