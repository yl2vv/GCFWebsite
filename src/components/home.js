import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div>
      <div className="home">
        <Fade duration="2000" className="fade">
          <p className="home_title">Welcome to Grace Christian Fellowship</p>
        </Fade>
      </div>
      <div className="homeBottom">
        <Fade duration="1500">
          <p className="bibleVerse">
            From whom the whole body, joined and held together by every joint
            with which it is equipped, when each part is working properly, makes
            the body grow so that it builds itself up in love.
            <br />
            <br />
            Ephesians 4:16
          </p>
        </Fade>
        <div className="subSection2">
          <div className="width_control">
            <Fade bottom>
              <p className="subsection_title">Our Mission</p>
            </Fade>
            <div className="subSection">
              <Fade left delay="500">
                <div className="textSection">
                  <p className="home_text3">
                    GCF aspires to raise disciples of Christ and reach out to
                    the UVA and Charlottesville communities with the Gospel of
                    Christ.
                  </p>
                </div>
              </Fade>
              <Fade right delay="700">
                <div className="linkSection">
                  <Link className="link" to="/about">
                    <button className="redirectButton">About</button>
                  </Link>
                  <Link className="link" to="/support">
                    <button className="redirectButton">Donate</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="subSection3">
          <div className="textSection2">
            <Fade left delay="500">
              <div className="commission_text">The Great Commission</div>
            </Fade>
            <Fade bottom delay="500">
              <div className="home_text2">
                "Go therefore and make disciples of all nations, baptizing them
                in the name of the Father and of the Son and of the Holy Spirit,
                teaching them to observe all that I have commanded you."
              </div>
            </Fade>
            <Fade right delay="500">
              <div className="linkSection">
                <Link className="link" to="/ministries">
                  <button className="redirectButton">Ministries</button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
