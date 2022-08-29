
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from './View/Main';
import ViewProduct from './View/ViewProduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/product">
          <Main />
        </Route>
        <Route exact path="/product/:id">
          <ViewProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
