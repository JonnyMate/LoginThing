import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import ComponentChange from "./ComponentChange";

class Login extends Component {
  state = {
    showingLogin: true
  };

  render() {
    return (
      <div>
        {/* Login input fields */}
        <LoginComponent />

        {/* Swap from login to register */}
        <ComponentChange data={this.state.showingLogin} />
      </div>
    );
  }
}

export default Login;
