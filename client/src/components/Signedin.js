import React from "react";

const Signedin = () => {
  return (
    <div className="input-container">
      <div>
        <h1>You are signed in</h1>
      </div>
      {/* Sign out */}
      <div className="submit-button">
        <a href="/">
          <button>Sign out</button>
        </a>
      </div>
    </div>
  );
};

export default Signedin;
