// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Home from './Components/Home';
import Word from './Components/Word';
import Color from './Components/Color';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            {/* <Link to="/">Home</Link>
            |
            <Link to="/about">About</Link> */}
            <Home />
          </Route>
          <Route exact path="/:word">
            <Word />
          </Route>
          <Route path="/:word/:textColor/:bgColor">
            <Color />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
