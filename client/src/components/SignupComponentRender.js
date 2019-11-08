import React from "react";

const SignupComponentRender = props => {
  return (
    <div className="input-container">
      <div>
        {/* Register */}
        <h1 className="title">Register</h1>
      </div>

      {/* If details are incorrect */}
      {props.detailsIncorrect && (
        <div className="incorrect">
          <p>Username is taken</p>
        </div>
      )}

      {/* Input boxes for user details */}
      <div className="credentials">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="repassword"
          placeholder="Re-type password"
          onChange={props.handleChange}
        />
      </div>

      {/* Submit */}
      <div className="submit-button">
        <button onClick={props.handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default SignupComponentRender;
