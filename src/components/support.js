import React from "react";
import Fade from "react-reveal/Fade";
import "./support.css";

function Support() {
  return (
    <div className="support">
      <div className="banner support">
        <Fade duration="1000">
          <p className="support_title">How To Support</p>
        </Fade>
      </div>
      <p className="request">
        <Fade left duration="1000">
          <div className="request_firsttext">PRAY FOR US REGULARLY </div>
        </Fade>
        <div className="vertical_divider"></div>
        <Fade right duration="1000">
          <div className="request_secondtext">
            SUPPORT US FINANCIALLY <br /> (TOTALLY VOLUNTARY)
          </div>
        </Fade>
      </p>
      <Fade duration="1500">
        <p className="mission">
          Your giving is vital and beneficial for our ministry and supporting
          our mission. If you would like to give to GCF online, please click
          below and put "GCF offering" in the memo. For those who are ALUMNI,
          Please contact our treasurer if you would like to support us.
        </p>
      </Fade>
      <Fade bottom duration="1500">
        <div className="donation_container">
          <a
            className="donation_link"
            target="_blank"
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FT4CR7E33JZD2&source=url"
          >
            <p className="donation">DONATE HERE</p>
          </a>
        </div>
      </Fade>
      <div className="supportListContainer">
        <Fade left duration="1000">
          <p className="supportList">
            <b>ALUMNI MISSIONARIES WE PRAY FOR</b> <br />
            Bob & Grace -- Asia <br />
            James & Lauren Kim ('91) -- N. America mobilization <br />
            Jee Lee ('03) -- Korea orphan ministry <br />
            Peter ('93) & Joann Kim -- Arizona <br />
            Peter & Rachel Chin -- E Africa <br />
            Others alums serving in various parts of the world <br />
          </p>
        </Fade>
        <Fade right duration="1000">
          <p className="supportList">
            <b>CHURCHES THAT SUPPORT GCF AND PRAY FOR US</b> <br />
            The Church of the Blue Ridge <br />
            Korean Community Church in Charlottesville <br />
            Covenant Fellowship Church, Urbana, IL <br />
            Great Commission Community Church, Arlington, VA <br />
            Korean Central Presbyterian Church, Centreville, VA <br />
            Korean Church of Vision and Love, Centreville, VA<br />
            Korean Presbyterian Church of Washington, Fairfax, VA <br />
            Open Door Presbyterian Church, Herndon, VA <br />
            Pilgrim Community Baptist Church, Burke, VA <br />
          </p>
        </Fade>
      </div>
      {/* <p className="mission">
        Servants Ministry is a non-profit tax-exempt 501(c)(3) organization. All
        donations are tax deductible to the extent allowed by law. Donors will
        receive an annual contribution statement by the end of January for
        donations made during the previous year. For questions, please contact
        Justin Gross at
        <div className="contact_container">
          <p className="contact">jgross@servantsministry.org.</p>
        </div>
      </p> */}
    </div>
  );
}

export default Support;
