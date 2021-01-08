import React from "react";
import "./ministries.css";
import {Link} from "react-router-dom";

function Ministries() {
  return (
    <div>
      <p className="ministries_title">Ministries</p>

      <div className='ministries_inreach'>
        <Link to="/ministries/inreach">
            <button>In Reach Ministry</button>
        </Link>
      </div>

      <div className='ministries_outreach'>
        <Link to="/ministries/outreach">
          <button>Out Reach Ministry</button>
        </Link>
      </div>

    </div>
  );
}

export default Ministries;
