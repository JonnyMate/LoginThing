import React from "react";

const LoginComponent = props => {
  return (
    <div className="input-container">
      <div>
        {/* Login / Register */}
        <h1 className="title">
          {props.data.showingLoginPage ? "Login" : "Register"}
        </h1>
      </div>

      {/* Input boxes for user details */}
      <div className="credentials">
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
      </div>

      <div className="submit-button">
        <button>{props.data.showingLoginPage ? "Login" : "Sign Up"}</button>
      </div>
    </div>
  );
};

export default LoginComponent;
