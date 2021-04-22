import './App.scss';

import {Switch, Route} from "react-router-dom";

import LandingPage from "./pages/LandingPage/landing.page";
import Dashboard from "./pages/Dashboard/dashboard.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
