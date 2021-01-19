import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.screen.height / 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="leftCorner">
        <NavLink exact={true} className="link" to="/">
          <div className="logo"></div>
        </NavLink>
      </div>
      <u1 className="nav-links">
        <NavLink className="link" activeClassName="link-active" to="/about">
          <div className="about_container">
            <p className="navtext">About</p>
          </div>
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link-active"
          to="/staff_and_leadership"
        >
          <div className="staff_container">
            <p className="navtext">Staff / Leadership</p>
          </div>
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link-active"
          to="/ministries"
        >
          <div className="ministry_container">
            <p className="navtext">Ministries</p>
          </div>
        </NavLink>
        <NavLink className="link" activeClassName="link-active" to="/events">
          <div className="event_container">
            <p className="navtext">Events</p>
          </div>
        </NavLink>
        <NavLink className="link" activeClassName="link-active" to="/support">
          <div className="support_container">
            <p className="navtext">Support</p>
          </div>
        </NavLink>
        {/* <NavLink className="link" activeClassName="link-active" to="/pictures">
          <p>Pictures</p>
        </NavLink> */}
        <NavLink className="link" activeClassName="link-active" to="/connect">
          <div className="connect_container">
            <p className="navtext">Connect</p>
          </div>
        </NavLink>
      </u1>
    </nav>
  );
}

export default Nav;
