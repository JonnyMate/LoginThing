import React, { Component } from "react";

class LoginComponentRender extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      detailsIncorrect: false
    };
  }

  onChangeUsername = () => {
    this.props.ChangeStateUsername(this.state.username);
  };

  // Takes values of input fields and puts them in state
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    this.onChangeUsername();
  };

  render() {
    return (
      <div className="input-container">
        <div>
          {/* Login / Register */}
          <h1 className="title">Login</h1>
        </div>

        {/* If details are incorrect */}
        {this.state.detailsIncorrect && (
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

export default LoginComponentRender;
