import React from "react";
import ReactPlayer from 'react-player/youtube';
import "./about.css";
import {Link} from "react-router-dom";

function About() {
  return (
    <div className='about'>
      <div className="about_header">
        <p className="about_title">We Are Grace Christian Fellowship</p>
        <ReactPlayer url='https://youtu.be/GSOAj-Q5-1k' controls='true'/>
      </div>

      <div className='about_info'>
        <p className='about_text'>Grace Christian Fellowship is a fellowship branch of Servants Ministry at UV.a., and seeks to follow Christ's commission and the Great Commandment. GCF aspires to raise disciples of Christ and reach out to the UVA and Charlottesville communities with the Gospel of Christ.</p> 
        <Link to="/staff_and_leadership">
          <button>Staff and Leadership</button>
        </Link>
      </div> 

      <div>
        <p className='about_text'>Friday nights at 7:15 pm for Large Group; Sunday Chapel at the UV.a. Chapel every Sunday at 1:00 pm.</p>
        <Link to="/events">
          <button>Events</button>
        </Link>
      </div>

      <div className='about_involved'>
        <Link to="/ministries">
          <button>Ministries</button>
        </Link>
      </div>

      <div className='about_disclaimer'> 
        <p className='about_text'>Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.</p> 
        <p className='about_text'>Grace Christian Fellowship does not restrict its membership, programs, or activities on the basis of age, color, disability, gender identity, marital status, national or ethnic origin, political affiliation, race, religion, sex (including pregnancy), sexual orientation, veteran status, and family and genetic information.</p>
      </div>
    </div>
  );
}

export default About;
