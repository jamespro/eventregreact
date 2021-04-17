import React, { Component } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import SharedHeader from "./Components/SharedComponents/SharedHeader";
import LandingPage from "./Components/LandingComponents/LandingPage";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SharedHeader />
        <LandingPage />
        {/* <!--make a set of registration components--> */}

        {/* <!--make a global registration header include--> */}
        {/* <!--need components for reg form elements--> */}
        {/* <!--make different components for demo form elements --> */}
        {/* <!--make different components for item form elements --> */}
        {/* <!--LATER: should define fields by sitetypes--> */}
        {/* <!--make a global registration footer include--> */}
      </div>
    );
  }
}

export default App;
