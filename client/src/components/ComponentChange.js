import React from "react";
import { Link } from "react-router-dom";

const ComponentChange = props => {
  return (
    <div className="input-switch">
      <p>
        {props.data ? "Don't have an account?" : "Already have an account?"}
      </p>
      <Link to={props.data ? "/signup" : "/login"}>
        <p style={{ textDecoration: "underline", cursor: "pointer" }}>
          {props.data ? "Register" : "Login"}
        </p>
      </Link>
    </div>
  );
};

export default ComponentChange;
