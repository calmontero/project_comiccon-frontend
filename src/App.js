import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgramsContainer from './components/ProgramsContainer/ProgramsContainer';
import HomePage from './components/HomePage/HomePage';
import NavBar from "./components/NavBar/NavBar";
import ProgramsDetails from './components/ProgramsDetails/ProgramsDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background" />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/programs">
            <ProgramsContainer />
          </Route>
          <Route path="/programs/:id">
            <ProgramsDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
