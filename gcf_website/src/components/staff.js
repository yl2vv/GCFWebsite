import React from "react";
import "./staff.css";
import PastorIJ from "../images/pastorij.png";

function Staff() {
  return (
    <div className='staff'>
      <div className='banner staff'>
        <p className="staff_title">Staff</p>
      </div>
      <div className="staff content">
        <div className="pastorij_container">
          <p className="pastorij_text">Our Pastor</p>
          <img src={PastorIJ} alt="PastorIJ" className="pastorij_image" />
        </div>
        <div className="exec_container">
          <img src={PastorIJ} alt="Exec" className="exec_image" />
          <p className="exec_text">Exec</p>
        </div>
      </div>

    </div>
  );
}

export default Staff;
