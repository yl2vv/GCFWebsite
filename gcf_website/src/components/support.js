import React from "react";
import "./support.css";

function Support() {
  return (
    <div className="support">
      <div className="banner support">
        <p className="support_title">How To Support</p>
      </div>
      <p className="mission">
        Our ministry is made possible through faithful prayer and financial
        supporters. Please contact us if you are interested in joining this
        cause of helping young men and women to embrace and follow the way of
        God's love and truth during the important years of their life.
      </p>
      <div className="donation">Donate Here</div>
      <p className="mission">
        Servants Ministry is a non-profit tax-exempt 501(c)(3) organization. All
        donations are tax deductible to the extent allowed by law. Donors will
        receive an annual contribution statement by the end of January for
        donations made during the previous year. For questions, please contact
        Justin Gross at
        <div className="contact_container">
          <p className="contact">jgross@servantsministry.org.</p>
        </div>
      </p>
    </div>
  );
}

export default Support;
