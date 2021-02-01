import React from "react";
import "./staff.css";
import PastorIJ from "../images/pastorij.png";

function Staff() {
  return (
    <div className="staff">
      <div className="banner staff">
        <p className="staff_title">Staff / Leadership</p>
      </div>
      <div className="staff content">
        <div className="section_container">
          <div className="staff_subtitle">Our Pastor</div>
          <div className="staff_container">
            <div className="staff_underliner"></div>
          </div>
          <div className="pastorij_container">
            <img src={PastorIJ} alt="PastorIJ" className="pastorij_image" />
            <p className="staff_text">
              IJ Kim is the Pastor of Grace Christian Fellowship and the
              Director of Servants Ministry.
            </p>
          </div>
        </div>
        <div className="section_container">
          <div className="staff_subtitle">The Exec Team</div>
          <div className="staff_container">
            <div className="staff_underliner"></div>
          </div>
          <div className="section_container2">
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">President</p>
            </div>
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">Small Group Coordinator</p>
            </div>
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">Outreach Coordinator</p>
            </div>
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">Large Group Coordinator</p>
            </div>
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">Secretary</p>
            </div>
            <div className="exec_container">
              <img src={PastorIJ} alt="Exec" className="exec_image" />
              <p className="exec_text">Treasurer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
