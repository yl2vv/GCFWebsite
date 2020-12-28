import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <p className="home_title">Welcome to Grace Christian Fellowship</p>
      <img
        src={require("../images/pastorij.jpg")}
        alt="gcfhome"
        className="gcfhome"
      />
    </div>
  );
}

export default Home;
