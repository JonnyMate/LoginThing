import React, { Component } from "react";
import SignupComponent from "./SignupComponent.js";
import SignupComponentChange from "./SignupComponentChange.js";

class Signup extends Component {
  render() {
    return (
      <div>
        {/* Login input fields */}
        <SignupComponent />

        {/* Swap from login to register */}
        <SignupComponentChange />
      </div>
    );
  }
}

export default Signup;
