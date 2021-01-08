import React from "react";
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home_welcome">
        <p className="home_title">Welcome to Grace Christian Fellowship</p>
      </div>
      <div>
        <p>Inspirational Bible Message</p>
      </div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/donate">
          <button>Donate</button>
        </Link>
      </div>
      <div>
        <Link to="/ministries">
          <button>Ministries</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;
