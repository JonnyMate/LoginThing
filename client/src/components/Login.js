import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import LoginComponentChange from "./LoginComponentChange";

class Login extends Component {
  render() {
    return (
      <div>
        {/* Login input fields */}
        <LoginComponent />

        {/* Swap from login to register */}
        <LoginComponentChange />
      </div>
    );
  }
}

export default Login;
