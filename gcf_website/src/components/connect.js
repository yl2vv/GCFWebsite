import React from "react";
import "./connect.css";
import {FaFacebook, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";

function Connect() {
  return (
    <div className="connect">
      <div className='banner'>
       <p className="connect_title">Connect with us</p>
      </div>
      <div className="socialMedia">
        <p>Find us on social media</p>
        <a href="https://www.facebook.com/GCFatUVA" target="_blank" rel="noreferrer" className="social">
            <FaFacebook/>
          </a>
          <a href="https://www.instagram.com/gcfuva/" target="_blank" rel="noreferrer" className="social">
            <FaInstagram />
          </a>
        <a href="https://twitter.com/gcfatuva" target="_blank" rel="noreferrer" className="social">
          <FaTwitter/>
        </a>
        <a href="https://www.youtube.com/channel/UC7-1yqo1ig1VSDeg8eQ-S9w" target="_blank" rel="noreferrer" className="social">
          <FaYoutube/>
        </a>
      </div>
    </div>
  );
}

export default Connect;
