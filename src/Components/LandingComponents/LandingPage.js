import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section>
      <section id="admin">
        <ul>
          <li>Event Admin (separate app, TBD)</li>
        </ul>
      </section>
      <section id="registration">
        <p>(or see a list of events and button for register)</p>
        <ul>
          <li>
            Event 1:
            <ul>
              <li>
                <a href="/reg/attendee/start">Register as an Attendee</a>
              </li>
              <li>
                <a href="/reg/attendee/admin">Attendee Admin</a>
              </li>
              <li>
                <a href="/reg/attendee/upgrade">Attendee Upgrade</a>
              </li>
              <li>
                <a href="/reg/exhibitor/start">Register as an Exhibitor</a>
              </li>
            </ul>
          </li>
          <li>
            Event 2:
            <ul>
              <li>
                <a href="/reg/attendee/start">Register as an Attendee</a>
              </li>
              <li>
                <a href="/reg/attendee/admin">Attendee Admin</a>
              </li>
              <li>
                <a href="/reg/attendee/upgrade">Attendee Upgrade</a>
              </li>
              <li>
                <a href="/reg/exhibitor/start">Register as an Exhibitor</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default LandingPage;
