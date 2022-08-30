
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
import Update from './View/Update';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/product">
          <Main />
        </Route>
        <Route exact path="/product/:id">
          <ViewProduct />
        </Route>
        <Route path="/product/edit/:id">
          <Update />
      </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
