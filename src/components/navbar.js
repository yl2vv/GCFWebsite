import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./navbar.css";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.screen.height / 25) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="leftCorner">
        <Fade delay="500">
          <NavLink exact={true} className="link" to="/">
            <div className="logo"></div>
          </NavLink>
        </Fade>
      </div>
      <u1 className="nav-links">
        <Fade delay="750">
          <NavLink className="link" activeClassName="link-active" to="/about">
            <div className="about_container">
              <p className="navtext">About</p>
            </div>
          </NavLink>
        </Fade>

        <Fade delay="900">
          <NavLink
            className="link"
            activeClassName="link-active"
            to="/staff_and_leadership"
          >
            <div className="staff_container">
              <p className="navtext">Leadership</p>
            </div>
          </NavLink>
        </Fade>
        <Fade delay="1050">
          <NavLink
            className="link"
            activeClassName="link-active"
            to="/ministries"
          >
            <div className="ministry_container">
              <p className="navtext">Ministries</p>
            </div>
          </NavLink>
        </Fade>
        <Fade delay="1300">
          <NavLink className="link" activeClassName="link-active" to="/events">
            <div className="event_container">
              <p className="navtext">Events</p>
            </div>
          </NavLink>
        </Fade>
        <Fade delay="1450">
          <NavLink className="link" activeClassName="link-active" to="/support">
            <div className="support_container">
              <p className="navtext">Support</p>
            </div>
          </NavLink>
        </Fade>
        {/* <NavLink className="link" activeClassName="link-active" to="/pictures">
          <p>Pictures</p>
        </NavLink> */}
        <Fade delay="1600">
          <NavLink className="link" activeClassName="link-active" to="/connect">
            <div className="connect_container">
              <p className="navtext">Connect</p>
            </div>
          </NavLink>
        </Fade>
      </u1>
    </nav>
  );
}

export default Nav;
