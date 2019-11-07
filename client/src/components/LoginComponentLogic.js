import React, { Component } from "react";
import LoginComponentRender from "./LoginComponentRender";

class LoginComponentLogic extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      detailsIncorrect: false
    };
  }

  handleLogin = () => {
    //Fetch from DB
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        // If response is successful, redirect user
        if (data.success) {
          window.location.href = "/signedin";
        } else {
          this.setState({ detailsIncorrect: true });
          this.props.changeState(
            this.state.username,
            this.state.password,
            this.state.detailsIncorrect
          );
        }
      })
      .catch(err => console.log(err));
  };

  handleChange = async event => {
    const { name, value } = event.target;

    await this.setState({
      [name]: value
    });

    this.props.changeState(
      this.state.username,
      this.state.password,
      this.state.detailsIncorrect
    );
  };

  render() {
    return (
      <LoginComponentRender
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
        detailsIncorrect={this.state.detailsIncorrect}
      />
    );
  }
}

export default LoginComponentLogic;
