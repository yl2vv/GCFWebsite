import React from "react";
import "./support.css";

function Support() {
  return (
    <div className="support">
      <div className="banner support">
        <p className="support_title">How To Support</p>
      </div>
      <p className="mission">
      Your giving is vital and beneficial for our ministry and supporting our mission. 
      If you would like to give to GCF online, please click below and put "GCF offering" in the memo.
      </p>
      <div className="donation_container">
        <a
          className="donation_link"
          target="_blank"
          href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FT4CR7E33JZD2&source=url"
        >
          <p className="donation">DONATE HERE</p>
        </a>
      </div>
      <div className="supportListContainer">
        <p className="supportList">
          <b>ALUMNI MISSIONARIES WE PRAY FOR</b> <br/>

          Bob ('92, medicine) & Grace Shim (VT '90) -- Thailand <br/>
          James & Lauren Kim ('91) -- N. America mobilization <br/>
          Jee Lee ('03) -- Korea orphan ministry <br/>
          Peter ('93) & Joann Kim -- Native American outreach, AZ <br/>
          Peter & Rachel Chin -- E Africa <br/>
          Sung ('92) & Heidi -- Asia <br/>
          Susan ('09) & Michael Lee -- Asia
        </p>
        <p className="supportList">
          <b>CHURCHES THAT SUPPORTS GCF AND PRAYS FOR US</b> <br/>

          The Church of the Blue Ridge <br/>
          Korean Community Church in Charlottesville <br/>
          Covenant Fellowship Church, Urbana, IL <br/>
          Great Commission Community Church, Arlington, VA <br/>
          Korean Central Presb Church, Centreville, VA <br/>
          Korean Presb Church of Washington, Fairfax, VA <br/>
          Open Door Presbyterian Church, Herndon, VA <br/>
          Pilgrim Community Baptist Church, Burke, VA <br/>
        </p>
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
