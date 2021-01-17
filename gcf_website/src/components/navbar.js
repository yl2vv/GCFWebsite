import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Nav() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= (window.screen.height /15)) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'nav active' : 'nav'}>
      <div className="leftCorner">
          <NavLink
          exact={true}
          className="link"
          to="/"
          >
            <div className='logo'></div>
          </NavLink>
      </div>
      <u1 className="nav-links">
        <NavLink className="link" activeClassName="link-active" to="/about">
          <p>About</p>
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link-active"
          to="/staff_and_leadership"
        >
          <p>Staff / Leadership</p>
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link-active"
          to="/ministries"
        >
          <p>Ministries</p>
        </NavLink>
        <NavLink className="link" activeClassName="link-active" to="/events">
          <p>Events</p>
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link-active"
          to="/supporters"
        >
          <p>Supporters</p>
        </NavLink>
        {/* <NavLink className="link" activeClassName="link-active" to="/pictures">
          <p>Pictures</p>
        </NavLink> */}
        <NavLink className="link" activeClassName="link-active" to="/connect">
          <p>Connect</p>
        </NavLink>
      </u1>
    </nav>
  );
}

export default Nav;
