import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import NavBar from "./components/NavBar/NavBar";
import PublishersContainer from "./components/PublishersContainer/PublishersContainer";

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
          <Route exact path="/publishers">
            <PublishersContainer />
          </Route>
          <Route path="/publishers/:id">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
