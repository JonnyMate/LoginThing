import React, { Component } from "react";

class SignupComponent extends Component {
  state = {
    username: "",
    password: "",
    repassword: "",
    detailsIncorrect: false
  };

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
      <div className="input-container">
        <div>
          {/* Register */}
          <h1 className="title">Register</h1>
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
          <input
            type="password"
            name="repassword"
            placeholder="Re-type password"
            onChange={this.handleChange}
          />
        </div>

        {/* Submit */}
        <div className="submit-button">
          <button onClick={this.handleSignup}>Signup</button>
        </div>
      </div>
    );
  }
}

export default SignupComponent;
