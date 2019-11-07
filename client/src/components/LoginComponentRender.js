import React, { Component } from "react";

class LoginComponentRender extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="input-container">
        <div>
          {/* Login / Register */}
          <h1 className="title">Login</h1>
        </div>

        {/* If details are incorrect */}
        {this.props.detailsIncorrect && (
          <div className="incorrect">
            <p>Incorrect username or password</p>
          </div>
        )}

        {/* Input boxes for user details */}
        <div className="credentials">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.props.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.props.handleChange}
          />
        </div>

        {/* Submit */}
        <div className="submit-button">
          <button onClick={this.props.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginComponentRender;
