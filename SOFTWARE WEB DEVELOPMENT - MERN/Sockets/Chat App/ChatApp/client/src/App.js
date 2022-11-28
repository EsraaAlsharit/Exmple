import React from 'react';
import './App.css';
import Chat from './component/Chat';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './component/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <SignUp/>
          </Route>
          <Route exact path="/chat">
          <Chat/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
