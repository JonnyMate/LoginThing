import React, { Component } from "react";
const bcrypt = require("bcryptjs");

class LoginComponent extends Component {
  state = {
    username: "",
    password: ""
  };

  // Handles login details
  handleLogin = async () => {
    // Fetch from DB
    fetch("/api/users")
      .then(res => res.json())
      .then(users => {
        // Loops through users in DB and compares input password with stored hashed password
        for (let i = 0; i < users.length; i++) {
          bcrypt.compare(this.state.password, users[i].password, (err, res) => {
            // Signs user in if username and password match DB
            if (users[i].username === this.state.username && res) {
              window.location.href = "/signedin";
            }
          });
        }
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
