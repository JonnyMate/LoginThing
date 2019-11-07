import React, { Component } from "react";
import SignupComponent from "./SignupComponent.js";
import ComponentChange from "./ComponentChange.js";

class Signup extends Component {
  state = {
    showingLogin: false
  };

  render() {
    return (
      <div>
        {/* Login input fields */}
        <SignupComponent />

        {/* Swap from register to login */}
        <ComponentChange data={this.state.showingLogin} />
      </div>
    );
  }
}

export default Signup;
