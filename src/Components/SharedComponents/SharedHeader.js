import React from "react";
import logo from "../../logo.svg";

const SharedHeader = () => {
  return (
    <header className="App-header">
      <a className="home-link" href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <p>Welcome to Event Registration</p>
    </header>
  );
};

export default SharedHeader;
