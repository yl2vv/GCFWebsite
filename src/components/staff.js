import React from "react";
import "./staff.css";
import PastorIJ from "../images/pastorij.png";
import President from "../images/exec/cro.jpg";
import SGC from "../images/exec/katelynn.jpg";
import OC from "../images/exec/abby.jpg";
import LGC from "../images/exec/matthew2.png";
import Secretary from "../images/exec/sophie2.jpg";
import Treasurer from "../images/exec/alex.jpg";

function Staff() {
  return (
    <div>
      <div className="staff">
        <div className="banner staff">
          <p className="staff_title">Staff / Leadership</p>
        </div>

        <div className="staff2">
          <div className="section_container">
            <div className="staff_subtitle">The Exec Team</div>
            <div className="staff_container">
              <div className="staff_underliner"></div>
            </div>
            <div className="section_subcontainer">
              <div className="exec_container">
                <img src={President} alt="Exec" className="exec_image" />
                <p className="exec_text">President - Christian Ro</p>
              </div>
              <div className="exec_container">
                <img src={SGC} alt="Exec" className="exec_image" />
                <p className="exec_text">
                  Small Group Coordinator - Katelynn Lee
                </p>
              </div>
              <div className="exec_container">
                <img src={OC} alt="Exec" className="exec_image" />
                <p className="exec_text">Outreach Coordinator - Abby Park</p>
              </div>
              <div className="exec_container">
                <img src={LGC} alt="Exec" className="exec_image" />
                <p className="exec_text">
                  Large Group Coordinator - Matthew Yang
                </p>
              </div>
              <div className="exec_container">
                <img src={Secretary} alt="Exec" className="exec_image" />
                <p className="exec_text">Secretary - Sophie Peng</p>
              </div>
              <div className="exec_container">
                <img src={Treasurer} alt="Exec" className="exec_image" />
                <p className="exec_text">Treasurer - Alex Wang</p>
              </div>
            </div>
          </div>
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
              Pastor IJ Kim is the director and pastor of Grace Christian Fellowship.
              He grew up in Northern Virginia and 
              after obtaining his B.A. in Economics from the University of Virginia (Charlottesville, VA),
               he studied at the Biblical Theological Seminary/Missio Seminary (Philadelphia, PA).
                He is married to Aileen, and is blessed with two sons, Noah and Joshua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
