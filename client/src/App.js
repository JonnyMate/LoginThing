import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <img src="https://bit.ly/36rpQo2" alt="welcome art" />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
};

export default App;
