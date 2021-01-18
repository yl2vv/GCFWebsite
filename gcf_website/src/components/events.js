import React from "react";
import "./events.css";

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

class Events extends React.Component {
  componentDidMount () {
    switch (getDayOfWeek(Date.now())) {
      case "Monday":
        document.getElementById("Monday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      case "Tuesday":
        document.getElementById("Tuesday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      case "Wednesday":
        document.getElementById("Wednesday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      case "Thursday":
        document.getElementById("Thursday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      case "Friday":
        document.getElementById("Friday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      case "Saturday":
        document.getElementById("Saturday").setAttribute("style", "color: rgb(29,98,57);");
        break;
      default:
        document.getElementById("Sunday").setAttribute("color", "color: rgb(29,98,57);");
    }
}
render() {
  return (
    <div className='events'>
      <div className='banner events'>
       <p className="events_title">Events</p>
      </div>
      <div className='eventsContent'>
        <div className="weekTitle">Weekly Meetings</div>
         <div className="week">
          <div className="square first">
            <div className="day" id="Monday">Monday</div>
            <div className="event"></div>
          </div>
          <div className="square">
            <div className="day" id="Tuesday">Tuesday</div>
            <div className="event"></div>
          </div>
          <div className="square">
            <div className="day" id="Wednesday">Wednesday</div>
            <div className="event">Prayer Meeting @9:00PM</div>
          </div>
          <div className="square">
            <div className="day" id="Thursday">Thursday</div>
            <div className="event"></div>
          </div>
          <div className="square">
           <div className="day" id="Friday">Friday</div>
            <div className="event"> Large Group @7:30PM</div>
          </div>
          <div className="square">
            <div className="day" id="Saturday">Saturday</div>
            <div className="event"></div>
          </div>
          <div className="square">
            <div className="day" id="Sunday">Sunday</div>
            <div className="event"> Sunday Chapel @11:00AM</div>
          </div>
         </div>
         {/* <div className='retreat'>
           retreat
         </div>
         <div>
           pictures?
         </div> */}
       </div>
    </div>
  );
}
}

export default Events;
