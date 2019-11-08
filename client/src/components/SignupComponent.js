import React, { Component } from "react";
import SignupComponentLogic from "./SignupComponentLogic";

class SignupComponent extends Component {
  state = {
    username: "",
    password: "",
    repassword: "",
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
    return (
      <SignupComponentLogic
        ChangeState={this.onChangeState}
        detailsIncorrect={this.state.detailsIncorrect}
      />
    );
  }
}

export default SignupComponent;
