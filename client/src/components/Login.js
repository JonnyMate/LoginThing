import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import LoginComponentChange from "./LoginComponentChange";

class Login extends Component {
  state = {
    showingLoginPage: true
  };

  handleChange = () => {
    this.setState(prevState => ({
      showingLoginPage: !prevState.showingLoginPage
    }));
  };

  render() {
    return (
      <div>
        {/* Login / Register input fields */}
        <LoginComponent data={this.state} />

        {/* Swap from login to register */}
        <LoginComponentChange
          data={this.state}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Login;
