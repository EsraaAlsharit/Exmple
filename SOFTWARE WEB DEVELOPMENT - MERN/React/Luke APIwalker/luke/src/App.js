// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import { Router } from '@reach/router';
// import APIwalker from './Components/APIwalker';
// import Home from './Components/Home';
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
            <People path="/people/:id" />
          </Route>
          <Route exact path="/planet/:id">
            <Planet path='/planet/:id' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
