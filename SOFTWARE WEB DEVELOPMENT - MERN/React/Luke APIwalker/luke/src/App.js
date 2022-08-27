// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import People from './Components/People';
import Planet from './Components/Planet';
import From from './Components/Form';


function App() {
  return (

    <div className="App">
      <From />
      <BrowserRouter>
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route exact path="/planet/:id">
            <Planet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
