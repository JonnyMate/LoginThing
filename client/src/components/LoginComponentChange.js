import React from "react";

const LoginComponentChange = props => {
  return (
    <div className="input-switch">
      <p>
        {props.data.showingLoginPage
          ? "Don't have an account?"
          : "Already have an account?"}
      </p>
      <p style={{ textDecoration: "underline" }} onClick={props.handleChange}>
        {props.data.showingLoginPage ? "Register" : "Login"}
      </p>
    </div>
  );
};

export default LoginComponentChange;
