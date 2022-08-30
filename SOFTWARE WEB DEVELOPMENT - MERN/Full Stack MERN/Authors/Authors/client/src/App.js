// import logo from './logo.svg';
import './App.css';
import Dashboard from './View/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AddForm from './View/AddForm';
import EditForm from './View/EditForm';
import ErrorPage from './View/ErrorPage';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/New">
            <AddForm />
          </Route>
          <Route exact path="/Error">
            <ErrorPage />
          </Route>
          <Route path="/Edit/:id">
            <EditForm />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
