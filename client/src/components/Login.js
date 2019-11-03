import React, { Component } from "react";

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
        <div className="input-container">
          <div>
            <h1 className="title">
              {this.state.showingLoginPage ? "Login" : "Register"}
            </h1>
          </div>

          <div className="credentials">
            <input name="username" placeholder="Username" />
            <input name="password" placeholder="Password" />
          </div>

          <div className="submit-button">
            <button>Login</button>
          </div>
        </div>

        <div className="input-switch">
          <p>Don't have an account?</p>
          <p
            style={{ textDecoration: "underline" }}
            onClick={this.handleChange}
          >
            Register
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
