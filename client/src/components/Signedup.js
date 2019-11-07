import React from "react";

const Signedup = () => {
  return (
    <div className="input-container">
      <div>
        <h1>You have made an account!</h1>
      </div>
      {/* Go to login page */}
      <div className="submit-button">
        <a href="/">
          <button>Sign in</button>
        </a>
      </div>
    </div>
  );
};

export default Signedup;
