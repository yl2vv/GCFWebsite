import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./navbar.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);

  // const [navLogo, setLogo] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.screen.height / 100) {
      setNavbar(true);
      // setLogo(true);
    } else {
      setNavbar(false);
      // setLogo(false);
    }
  };

  // const changeOnWindowSize = () => {
  //   if (window.innerWidth <= 992) {
  //     setNavbar2(true);
  //   } else {
  //     setNavbar2(false);
  //   }
  // };

  window.addEventListener("scroll", changeBackground);
  // window.addEventListener("resize", changeOnWindowSize);

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
        <Nav className="nav-links">
          <NavLink to="/about" className="link" activeClassName="link-active">
            <Fade delay="150">
              <div className="navtext">About</div>
            </Fade>
          </NavLink>

          <NavLink
            to="/staff_and_leadership"
            className="link"
            activeClassName="link-active"
          >
            <Fade delay="350">
              <div className="navtext">Leadership</div>
            </Fade>
          </NavLink>

          <NavLink
            to="/ministries"
            className="link"
            activeClassName="link-active"
          >
            <Fade delay="500">
              <div className="navtext">Ministries</div>
            </Fade>
          </NavLink>

          <NavLink to="/events" className="link" activeClassName="link-active">
            <Fade delay="650">
              <div className="navtext">Events</div>
            </Fade>
          </NavLink>

          <NavLink className="link" activeClassName="link-active" to="/support">
            <Fade delay="800">
              <div className="navtext">Support</div>
            </Fade>
          </NavLink>

          <NavLink to="/connect" className="link" activeClassName="link-active">
            <Fade delay="950">
              <div className="navtext">Connect</div>
            </Fade>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav className={navbar ? "nav active" : "nav"}>
    //   <div className="leftCorner">
    //     <Fade delay="500">
    //       <NavLink exact={true} className="link" to="/">
    //         <div className={"logo"} id="logo"></div>
    //         {/* <div className={navLogo ? "logoActive" : "logo"} id="logo"></div> */}
    //       </NavLink>
    //     </Fade>
    //   </div>
    //   <u1 className="nav-links">
    //     <Fade delay="750">
    //       <NavLink className="link" activeClassName="link-active" to="/about">
    //         <div className="about_container">
    //           <p className="navtext">About</p>
    //         </div>
    //       </NavLink>
    //     </Fade>

    //     <Fade delay="900">
    //       <NavLink
    //         className="link"
    //         activeClassName="link-active"
    //         to="/staff_and_leadership"
    //       >
    //         <div className="staff_container">
    //           <p className="navtext">Leadership</p>
    //         </div>
    //       </NavLink>
    //     </Fade>
    //     <Fade delay="1050">
    //       <NavLink
    //         className="link"
    //         activeClassName="link-active"
    //         to="/ministries"
    //       >
    //         <div className="ministry_container">
    //           <p className="navtext">Ministries</p>
    //         </div>
    //       </NavLink>
    //     </Fade>
    //     <Fade delay="1300">
    //       <NavLink className="link" activeClassName="link-active" to="/events">
    //         <div className="event_container">
    //           <p className="navtext">Events</p>
    //         </div>
    //       </NavLink>
    //     </Fade>
    //     <Fade delay="1450">
    //       <NavLink className="link" activeClassName="link-active" to="/support">
    //         <div className="support_container">
    //           <p className="navtext">Support</p>
    //         </div>
    //       </NavLink>
    //     </Fade>
    //     {/* <NavLink className="link" activeClassName="link-active" to="/pictures">
    //       <p>Pictures</p>
    //     </NavLink> */}
    //     <Fade delay="1600">
    //       <NavLink className="link" activeClassName="link-active" to="/connect">
    //         <div className="connect_container">
    //           <p className="navtext">Connect</p>
    //         </div>
    //       </NavLink>
    //     </Fade>
    //   </u1>
    // </nav>
  );
}

export default Navigation;
