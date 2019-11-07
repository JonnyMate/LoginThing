import React, { Component } from "react";

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
    detailsIncorrect: false
  };

  // Handles login details
  handleLogin = () => {
    // Fetch from DB
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
        data.success
          ? (window.location.href = "/signedin")
          : this.setState({ detailsIncorrect: true });
      })
      .catch(err => console.log(err));
  };

  // Takes values of input fields and puts them in state
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="input-container">
        <div>
          {/* Login / Register */}
          <h1 className="title">Login</h1>
        </div>

        {/* Input boxes for user details */}
        <div className="credentials">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>

        {/* Submit */}
        <div className="submit-button">
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
