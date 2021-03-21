import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <!--make a set of registration components--> */}

        {/* <!--make a global registration header include--> */}
        {/* <!--need components for reg form elements--> */}
        {/* <!--make different components for demo form elements --> */}
        {/* <!--make different components for item form elements --> */}
        {/* <!--should define fields by sitetypes--> */}

        <header className="App-header">
          <a className="home-link" href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <p>Welcome to Event Registration</p>
        </header>
        <section>
          {/* <!--need a link (that looks like a button?) : Register as an Attendee--> */}

          {/* <!--need a route: /register/reginfo/ -- make this have logic for any kind of attendee and be dynamic, but based on what? localStorage probably --> */}
          <a className="whatever" href="/register/reginfo/">
            Register as an Attendee
          </a>
        </section>
        {/* <!--make a global registration footer include--> */}
      </div>
    );
  }
}

export default App;
