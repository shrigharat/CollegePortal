import './App.scss';

import {Switch, Route} from "react-router-dom";

import LandingPage from "./pages/LandingPage/landing.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
