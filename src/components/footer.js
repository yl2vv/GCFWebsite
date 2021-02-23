import React from "react";
import "./footer.css";
import {FaFacebook, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      {/* <a href="http://www.servantsministry.org/index.html" target="_blank" rel="noreferrer" className="textFooter"> */}
      <div className="textFooter"> 
        <div className="textmain">
          Grace Christian Fellowship
        </div>
        <div className="divider">
        </div>
        <div className="textsub">
          University of Virginia
        </div>
      </div>
      <div className="icons">
          <a href="https://www.facebook.com/GCFatUVA" target="_blank" rel="noreferrer" className="links">
            <FaFacebook/>
          </a>
          <a href="https://www.instagram.com/gcfuva/" target="_blank" rel="noreferrer" className="links">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/gcfatuva" target="_blank" rel="noreferrer" className="links">
            <FaTwitter/>
          </a>
          <a href="https://www.youtube.com/channel/UC7-1yqo1ig1VSDeg8eQ-S9w" target="_blank" rel="noreferrer" className="links">
            <FaYoutube/>
          </a>
      </div>

    </div>
  );
}

export default Footer;