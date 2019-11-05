import React from "react";
import { Link } from "react-router-dom";

const ComponentChange = props => {
  return (
    <div className="input-switch">
      <p>Don't have an account?</p>
      <Link to={props.data ? "/signup" : "/login"}>
        <p style={{ textDecoration: "underline", cursor: "pointer" }}>
          Register
        </p>
      </Link>
    </div>
  );
};

export default ComponentChange;
