import React from "react";

const SignupComponent = () => {
  return (
    <div className="input-container">
      <div>
        {/* Register */}
        <h1 className="title">Register</h1>
      </div>

      {/* Input boxes for user details */}
      <div className="credentials">
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
        <input name="re-password" placeholder="Re-type password" />
      </div>

      <div className="submit-button">
        <button>Signup</button>
      </div>
    </div>
  );
};

export default SignupComponent;
