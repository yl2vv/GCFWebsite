import React from "react";
import "./outreach.css";
import {Link} from "react-router-dom";

function Outreach() {
  return (
    <div className='outreach'>
      <p className="outreach_title">Outreach</p>

      <div>
        <p>Ministries List</p>
      </div>

      <div>
        <Link to="/ministries/inreach">
          <button>See In Reach Ministries</button>
        </Link>
      </div>

      <div>
        <p>Message about donations</p>
        <Link to="/donate">
          <button>Donate</button>
        </Link>
      </div>
    </div>
  );
}

export default Outreach;