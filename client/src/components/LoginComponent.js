import React, { Component } from "react";
import LoginComponentLogic from "./LoginComponentLogic";

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
    detailsIncorrect: false
  };

  onChangeState = (newUsername, newPassword, newIncorrect) => {
    this.setState({
      username: newUsername,
      password: newPassword,
      detailsIncorrect: newIncorrect
    });
  };

  render() {
    return <LoginComponentLogic changeState={this.onChangeState} />;
  }
}

export default LoginComponent;
