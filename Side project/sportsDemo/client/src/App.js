
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';
import Edit from './views/Edit';
import Detail from './views/Details';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Index/>
      </Route>
      <Route exact path="/create">
        <Create/>
      </Route>
      <Route exact path="/:id">
        <Detail/>
      </Route>
      <Route exact path="/:id/edit">
        <Edit/> 
      </Route>
     
    </Switch>
  </BrowserRouter>
  );
}

export default App;
