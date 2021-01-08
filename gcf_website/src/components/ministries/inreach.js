import React from "react";
import "./inreach.css";
import {Link} from "react-router-dom";

function Inreach() {
  return (
    <div className='inreach'>
      <p className="inreach_title">Inreach</p>

      <div>
        <p>Ministries List</p>
      </div>

      <div>
        <Link to="/ministries/outreach">
          <button>See Out Reach Ministries</button>
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

export default Inreach;