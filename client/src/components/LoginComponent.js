import React from "react";

const LoginComponent = () => {
  return (
    <div className="input-container">
      <div>
        {/* Login / Register */}
        <h1 className="title">Login</h1>
      </div>

      {/* Input boxes for user details */}
      <div className="credentials">
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
      </div>

      <div className="submit-button">
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginComponent;
