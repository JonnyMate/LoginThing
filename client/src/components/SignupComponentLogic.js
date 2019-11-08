import React, { Component } from "react";
import SignupComponentRender from "./SignupComponentRender";

class SignupComponentLogic extends Component {
  constructor(props) {
    super();
  }

  handleSignup = () => {
    const { username, password, repassword } = this.state;

    // Compare password to repassword
    if (password !== repassword) {
      return;
    }

    // POST request to DB
    fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        data.success
          ? (window.location.href = "/signedup")
          : this.setState({ detailsIncorrect: true });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <SignupComponentRender
        handleChange={this.handleChange}
        handleSignup={this.handleSignup}
        changeState={this.props.changeState}
        detailsIncorrect={this.props.detailsIncorrect}
      />
    );
  }
}

export default SignupComponentLogic;
