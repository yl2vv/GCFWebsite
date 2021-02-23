import React from "react";
import "./connect.css";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Fade from "react-reveal/Fade";

function Connect() {
  return (
    <div className="connect">
      <div className="banner">
        <Fade duration="1000">
          <p className="connect_title">Connect with us</p>
        </Fade>
      </div>
      <div className="connectBody">
        <Fade top delay="500">
          <div className="connectCard">
            <iframe
              // src="https://docs.google.com/forms/d/e/1FAIpQLScLxzEHctUpwNMDGAxDg6DXrKKMUW9ifLfVKvlIFkT_ar33lA/viewform?embedded=true"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdofG0fWKAJS9L2sEn199WsQRY1jl4ryojPQLLT1TNXkBQXwg/viewform?embedded=true" 
              className="iframe"
              width="100%"
              height="1000"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </Fade>
        <Fade right delay="1000">
          <div className="sideConnect">
            <div className="socialMedia">
              <p className="socialMediaText">Find us on social media</p>
              <div className="socialMediaIcons">
                <a
                  href="https://www.facebook.com/GCFatUVA"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/gcfuva/"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="socialMediaIcons">
                <a
                  href="https://twitter.com/gcfatuva"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7-1yqo1ig1VSDeg8eQ-S9w"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="sideEmail">
              <p className="emailText">Email Us</p>
              <div className="emailContent">
                <a href="mailto:cr9ey@virginia.edu" className="emailIcon">
                  <HiOutlineMail></HiOutlineMail>
                </a>
                Christian Ro: <br/>
                cr9ey@virginia.edu
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Connect;
