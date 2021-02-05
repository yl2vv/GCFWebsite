import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./navbar.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { render } from "@testing-library/react";
import { withRouter } from "react-router";

const Navigator = (props) => {
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);
  const { location } = props;
  // const [navLogo, setLogo] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.screen.height / 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      collapseOnSelect
      className={navbar || navbar2 ? "nav active" : "nav"}
      expand="lg"
    >
      <Navbar.Brand href="/">
        <Fade delay="0">
          <div className={"logo"} id="logo"></div>
        </Fade>
      </Navbar.Brand>
      <Navbar.Toggle
        className="navToggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-links" activeKey={location.pathname}>
          <Nav.Link eventKey="1" to="/about" as={Link} className="link">
            <Fade delay="150">
              <div className="navtext">About</div>
            </Fade>
          </Nav.Link>

          <Nav.Link
            eventKey="2"
            to="/staff_and_leadership"
            as={Link}
            className="link"
          >
            <Fade delay="350">
              <div className="navtext">Leadership</div>
            </Fade>
          </Nav.Link>

          <Nav.Link eventKey="3" to="/ministries" as={Link} className="link">
            <Fade delay="500">
              <div className="navtext">Ministries</div>
            </Fade>
          </Nav.Link>

          <Nav.Link eventKey="4" to="/events" as={Link} className="link">
            <Fade delay="650">
              <div className="navtext">Events</div>
            </Fade>
          </Nav.Link>

          <Nav.Link eventKey="5" className="link" to="/support" as={Link}>
            <Fade delay="800">
              <div className="navtext">Support</div>
            </Fade>
          </Nav.Link>

          <Nav.Link eventKey="6" to="/connect" className="link" as={Link}>
            <Fade delay="950">
              <div className="navtext">Connect</div>
            </Fade>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Navigator);

function Navigation() {
  return (
    <div>
      <HeaderWithRouter />
    </div>
  );
}

export default Navigation;
