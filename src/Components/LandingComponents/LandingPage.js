import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section>
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
  );
};

export default LandingPage;
