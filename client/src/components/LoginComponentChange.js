import React from "react";
import { Link } from "react-router-dom";

const LoginComponentChange = () => {
  return (
    <div className="input-switch">
      <p>Don't have an account?</p>
      <Link to="/signup">
        <p style={{ textDecoration: "underline", cursor: "pointer" }}>
          Register
        </p>
      </Link>
    </div>
  );
};

export default LoginComponentChange;
