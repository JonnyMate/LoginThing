import React from "react";
import { Link } from "react-router-dom";

const SignupComponentChange = () => {
  return (
    <div className="input-switch">
      <p>Already have an account?</p>
      <Link to="/login">
        <p style={{ textDecoration: "underline", cursor: "pointer" }}>Login</p>
      </Link>
    </div>
  );
};

export default SignupComponentChange;
