import React, { Component } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import SharedHeader from "./Components/SharedComponents/SharedHeader";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SharedHeader />
        {/* <!--make a set of registration components--> */}

        {/* <!--make a global registration header include--> */}
        {/* <!--need components for reg form elements--> */}
        {/* <!--make different components for demo form elements --> */}
        {/* <!--make different components for item form elements --> */}
        {/* <!--LATER: should define fields by sitetypes--> */}
        <section>
          {/* <!--need a route: /register/reginfo/ -- make this have logic for any kind of attendee and be dynamic, but based on what? localStorage probably --> */}
          <section id="admin">
            <ul>
              <li>
                <a href="/admin/">Event Admin</a>
              </li>
            </ul>
          </section>
          <section id="registration">
            <ul>
              <li>
                <a href="/register/reginfo/">Register as an Attendee</a>
              </li>
            </ul>
          </section>
        </section>
        {/* <!--make a global registration footer include--> */}
      </div>
    );
  }
}

export default App;
