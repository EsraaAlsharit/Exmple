import './App.css';
import FirstComponent from './components/FirstComponent';


function App() {
  return (

    <div>
      <FirstComponent fname="Doe" lname="Jane" HairColor="Black" age={45} />
      <FirstComponent fname="Smith" lname="John" HairColor="Brown" age={88} />
      <FirstComponent fname="Fillmore" lname="Millard" HairColor="Brown" age={50} />
      <FirstComponent fname="Smith" lname="Maria" HairColor="Brown" age={62} />

    </div>



  );
}

export default App;
