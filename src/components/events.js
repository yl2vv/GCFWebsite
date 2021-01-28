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
      <div className='scheduleWeek'>
          <div className='weekContainer'>
            <div className="weekTitle">Recurring Events</div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Monday'>MON</div>
              </div>
              <div className="event">
                <div className="eventContainer">Morning Prayer @8:00AM</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Tuesday'>TUE</div>
              </div>
              <div className="event">
                <div className="eventContainer">Morning Prayer @8:00AM</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Wednesday'>WED</div>
              </div>
              <div className="event">
                <div className="eventContainer">Morning Prayer @8:00AM <br/> Prayer Meeting @9:00PM</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Thursday'>THU</div>
              </div>
              <div className="event">
                <div className="eventContainer">Morning Prayer @8:00AM</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Friday'>FRI</div>
              </div>
              <div className="event">
                <div className="eventContainer">Morning Prayer @8:00AM <br/> Large Group @7:15PM</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Saturday'>SAT</div>
              </div>
              <div className="event">
                <div className="eventContainer">-</div>
              </div>
            </div>
            <div className="weekSubContainer">
              <div className="day">
                <div className="dayContainer" id='Sunday'>SUN</div>
              </div>
              <div className="event">
                <div className="eventContainer">Sunday Chapel @11:00AM</div>
              </div>
            </div>

          </div>
          
        </div>
        <div className='specialEvents'>
          <div className='retreats'>
            <div className='retreat'>
              <div className='retreatTitle'>
                Servants Retreat
              </div>
              <div className='retreatPic Servants'></div>
            </div>

            <div className='retreat'>
              <div className='retreatTitle'>
                Men's Retreat
              </div>
              <div className='retreatPic Mens'></div>
            </div>

            <div className='retreat'>
              <div className='retreatTitle'>
                Women's Retreat
              </div>
              <div className='retreatPic Womens'></div>
            </div>

            <div className='retreat'>
              <div className='retreatTitle'>
                Spring Retreat
              </div>
              <div className='retreatPic Spring'></div>
            </div>

            <div className='retreat'>
              <div className='retreatTitle'>
                Harvest Retreat
              </div>
              <div className='retreatPic Harvest'></div>
            </div>
          </div>
        </div>
        
       </div>
    </div>
  );
}
}

export default Events;
