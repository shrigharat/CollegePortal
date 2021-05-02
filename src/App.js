import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage/landing.page";
import Dashboard from "./pages/Dashboard/dashboard.page";
import SignupPage from "./pages/Signup/signup.page";
import { useSelector } from "react-redux";
import { selectIsUserLoggedin } from "./redux/user/user.slice";

function App() {
  const isUserLoggedin = useSelector(selectIsUserLoggedin);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route
          path="/dashboard"
          render={() => {
            return isUserLoggedin ? <Dashboard/> : <Redirect to="/signup" />
          }}
        />
        <Route
          path="/signup"
          render={() => {
            return isUserLoggedin ? <Redirect to="/dashboard" /> : <SignupPage />
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
