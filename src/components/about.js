import React from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="banner about">
        <p className="about_title">We Are Grace Christian Fellowship</p>
      </div>
      <div className="intro">
        <ReactPlayer
          url="https://youtu.be/GSOAj-Q5-1k"
          controls="true"
          className="video"
        />
        <p className="about_text">
          <p className="gcf">Grace Christian Fellowship</p> is a fellowship
          branch of Servants Ministry at UV.a., and seeks to follow Christ's
          commission and the Great Commandment. GCF aspires to raise disciples
          of Christ and reach out to the UVA and Charlottesville communities
          with the Gospel of Christ.
        </p>
      </div>
      <div className="divAbout">
        <div className="about_underliner">
          <Link className="linkExec" to="/staff_and_leadership">
            Statement about student leaders
          </Link>
        </div>
      </div>
      {/* <div className="divAbout">
        <p>Service Times</p>
        <div>
          <p>Sunday Worship Service @11:00AM</p>
          <p>Friday Large Group @7:30PM</p>
        </div>
      </div> */}
      <div className="divAbout">
        <div className="about_subtitle">Serve With Us</div>
        <Link className="link" to="/ministries">
          <button className="redirectButton">Ministries</button>
        </Link>
      </div>
      <div className="divAbout">
        <div className="about_subtitle">Get Connected</div>
        <Link className="link" to="/connect">
          <button className="redirectButton">Connect</button>
        </Link>
      </div>
      <div className="divAbout disclaimer">
        <p className="disclaimer">
          Although this organization has members who are University of Virginia
          students and may have University employees associated or engaged in
          its activities and affairs, the organization is not a part of or an
          agency of the University. It is a separate and independent
          organization which is responsible for and manages its own activities
          and affairs. The University does not direct, supervise or control the
          organization and is not responsible for the organization’s contracts,
          acts or omissions.
        </p>
        <p className="disclaimer">
          Grace Christian Fellowship does not restrict its membership, programs,
          or activities on the basis of age, color, disability, gender identity,
          marital status, national or ethnic origin, political affiliation,
          race, religion, sex (including pregnancy), sexual orientation, veteran
          status, and family and genetic information.
        </p>
      </div>
    </div>
  );
}

export default About;
