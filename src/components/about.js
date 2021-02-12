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
        <div className="video_container">
          <ReactPlayer
            url="https://youtu.be/GSOAj-Q5-1k"
            controls="true"
            className="video"
            height="100%"
            width="100%"
          />
        </div>
        <p className="about_text">
          <p className="gcf">Grace Christian Fellowship</p> seeks to know Jesus Christ 
          and share His love and truth among all seekers of truth.  
          We also seek to raise Christ's people to reach out to the UVA
           and Charlottesville communities with His good news (the Gospel of Christ).
           GCF is a part of Servants Ministry, a network of campus ministries in Virginia.
        </p>
      </div>

        <div className="divAbout">
          <Link className="linkExec" to="/staff_and_leadership">
            Statement about student leaders
          </Link>
        </div>

        <div className="combiner">
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
        </div>


      <div className='colorChange'>
      <div className='statementOfFaith'>
        Statement of Faith 
        <div className='statementOfFaithBody'>
        <p>We believe the Bible is the written word of God, 
        inspired by the Holy Spirit and without error in the original manuscripts. 
        The Bible is the revelation of God’s truth and is infallible and authoritative
         in all matters of faith and practice. </p>

        <p>We believe in the Holy Trinity. 
        There is one God, who exists eternally in three persons: 
        the Father, the Son, and the Holy Spirit.  
        Each person is fully God. </p> 

        <p>We believe that all are sinners and totally unable to save themselves from God’s displeasure,
         except by His mercy. </p>

        <p>We believe that Jesus Christ is the eternal Son of God,
         who through His perfect life and sacrificial death atoned for the sins of all who will trust in Him, 
         alone, for salvation. </p>

        <p>We believe that the Holy Spirit indwells God’s people 
        and gives them the strength and wisdom to trust Christ and follow Him. </p>

        <p>We believe that Jesus will return, 
        bodily and visibly, to judge all mankind and to receive His people to Himself. </p>

        <p>We believe that all aspects of our lives are to be lived to the glory of God
         under the Lordship of Jesus Christ. </p>
       </div>
      </div>
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
