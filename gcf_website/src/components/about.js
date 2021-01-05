import React from "react";
import ReactPlayer from 'react-player/youtube'
import "./about.css";

function About() {
  return (
    <div className='about'>
      <p className="about_title">We Are Grace Christian Fellowship</p>
      <ReactPlayer url='https://youtu.be/GSOAj-Q5-1k' controls='true'/>
      <div className='about_texts'>
        <p className='about_text'>Grace Christian Fellowship is a fellowship branch of Servants Ministry at UV.a., and seeks to follow Christ's commission and the Great Commandment. GCF aspires to raise disciples of Christ and reach out to the UVA and Charlottesville communities with the Gospel of Christ.</p> 
        <p className='about_text'>GCF has numerous meetings and opportunities for students to get involved. We meet every Friday night at 7:15 pm for Large Group, and we also host Sunday Chapel at the UV.a. Chapel every Sunday at 1:00 pm.</p>
        <p className='about_text'>Throughout the week, we have Bible studies, ministry meetings, and Wednesday and class prayer meetings. We also love to play sports or go out to eat!</p>
        <p className='about_text'>Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.</p>
        <p className='about_text'>Grace Christian Fellowship does not restrict its membership, programs, or activities on the basis of age, color, disability, gender identity, marital status, national or ethnic origin, political affiliation, race, religion, sex (including pregnancy), sexual orientation, veteran status, and family and genetic information.</p>
      </div>
    </div>
  );
}

export default About;
