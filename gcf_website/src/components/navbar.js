import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Nav() {
  return (
    <nav>
      <u1 className="nav-links">
        <div className="nav-home">
          <NavLink
            exact={true}
            className="link"
            activeClassName="link-active"
            to="/"
          >
            <p>Home</p>
          </NavLink>
        </div>
        <div className="nav-tabs">
          <NavLink 
            className="link" 
            activeClassName="link-active" 
            to="/about"
          >
            <p>About</p>
          </NavLink>

          {/* <NavLink
            className="link"
            activeClassName="link-active"
            to="/staff_and_leadership"
          >
            <p>Staff / Leadership</p>
          </NavLink> */}

          <NavLink
            className="link"
            activeClassName="link-active"
            to="/ministries"
          >
            <p>Ministries</p>
          </NavLink>

          {/* <NavLink className="link" activeClassName="link-active" to="/events">
            <p>Events</p>
          </NavLink> */}

          <NavLink
            className="link"
            activeClassName="link-active"
            to="/donate"
          >
            <p>Donate</p>
          </NavLink>

          {/* <NavLink className="link" activeClassName="link-active" to="/pictures">
            <p>Pictures</p>
          </NavLink> */}

          <NavLink 
            className="link" 
            activeClassName="link-active" 
            to="/connect"
          >
            <p>Connect</p>
          </NavLink>
        </div>
      </u1>
    </nav>
  );
}

export default Nav;
