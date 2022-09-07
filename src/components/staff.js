import React from "react";
import "./staff.css";
import PastorIJ from "../images/pastorij3.jpeg";
import President from "../images/exec/daniel.jpeg";
import SGC from "../images/exec/emerson1.jpg";
import OC from "../images/exec/joseph.jpg";
import LGC from "../images/exec/dpark.jpg";
import Secretary from "../images/exec/jane.jpg";
import Treasurer from "../images/exec/laurenn3.jpg";
import Fade from "react-reveal/Fade";

function Staff() {
  return (
    <div>
      <div className="staff">
        <div className="banner staff">
          <Fade duration="1000">
            <p className="staff_title">Staff / Leadership</p>
          </Fade>
        </div>

        <div className="staff2">
          <div className="section_container">
            <div className="staff_subtitle">The Exec Team</div>
            <Fade left duration="1000">
              <div className="staff_container">
                <div className="staff_underliner"></div>
              </div>
            </Fade>
            <div className="section_subcontainer">
              <Fade cascade duration="1000">
                <div className="exec_container">
                  <img src={President} alt="Exec" className="exec_image" />
                  <p className="exec_text">President - Daniel Sun
                  <br></br>dws4ba@virginia.edu</p>
                </div>
                <div className="exec_container">
                  <img src={SGC} alt="Exec" className="exec_image" />
                  <p className="exec_text">
                    SG Coordinator - Emerson Stovner
                  <br></br>es4wtr@virginia.edu</p>
                </div>
                <div className="exec_container">
                  <img src={OC} alt="Exec" className="exec_image" />
                  <p className="exec_text">Outreach Coordinator - Joseph Lee
                  <br></br>jl5ag@virginia.edu</p>
                </div>
                <div className="exec_container">
                  <img src={LGC} alt="Exec" className="exec_image" />
                  <p className="exec_text">
                    Large Group Coordinator - David Park
                  <br></br>sp8et@virginia.edu</p>
                </div>
                <div className="exec_container">
                  <img src={Secretary} alt="Exec" className="exec_image" />
                  <p className="exec_text">Secretary - Jane Sun
                  <br></br>js2uex@virginia.edu</p>
                </div>
                <div className="exec_container">
                  <img src={Treasurer} alt="Exec" className="exec_image" />
                  <p className="exec_text">Treasurer - Laurenn Lee
                  <br></br>ll5edw@virginia.edu</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="staff content">
          <div className="section_container">
            <div className="staff_subtitle">Our Pastor</div>
            <Fade left duration="1000">
              <div className="staff_container">
                <div className="staff_underliner"></div>
              </div>
            </Fade>
            <div className="pastorij_container">
              <Fade left duration="1000">
                <img src={PastorIJ} alt="PastorIJ" className="pastorij_image" />
              </Fade>
              <Fade right duration="1000">
                <p className="staff_text">
                  Pastor IJ Kim is the director and pastor of Grace Christian
                  Fellowship. He grew up in Northern Virginia and, after
                  obtaining his B.A. in Economics from the University of
                  Virginia (Charlottesville, VA), he studied at the Biblical
                  Theological Seminary/Missio Seminary (Philadelphia, PA). He is
                  married to Aileen (UVA Alum, Comm School), and is blessed with two sons, Noah and Joshua.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
