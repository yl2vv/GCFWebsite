import React from "react";
import "./events.css";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
}

class Events extends React.Component {
  state = {
    items: [
      { id: 1, title: "Servants", class: "retreatPic Servants" },
      { id: 2, title: "Mens", class: "retreatPic Mens" },
      { id: 3, title: "Womens", class: "retreatPic Womens" },
      { id: 4, title: "Spring", class: "retreatPic Spring" },
      { id: 5, title: "Harvest", class: "retreatPic Harvest" },
    ],
  };

  componentDidMount() {
    switch (getDayOfWeek(Date.now())) {
      case "Monday":
        document
          .getElementById("Monday")
          .setAttribute("style", "color: white;");
        break;
      case "Tuesday":
        document
          .getElementById("Tuesday")
          .setAttribute("style", "color: white;");
        break;
      case "Wednesday":
        document
          .getElementById("Wednesday")
          .setAttribute("style", "color: white;");

        break;
      case "Thursday":
        document
          .getElementById("Thursday")
          .setAttribute("style", "color: white;");
        break;
      case "Friday":
        document
          .getElementById("Friday")
          .setAttribute("style", "color: white;");
        break;
      case "Saturday":
        document
          .getElementById("Saturday")
          .setAttribute("style", "color: white;");
        break;
      default:
        document
          .getElementById("Sunday")
          .setAttribute("style", "color: white;");
        break;
    }
  }
  render() {
    const { items } = this.state;
    return (
      <div className="events">
        <div className="banner events">
          <Fade duration="1000">
            <p className="events_title">Events</p>
          </Fade>
        </div>
        <div className="eventsContent">
          <Fade left>
            <div className="scheduleWeek">
              <div className="weekContainer">
                <div className="weekTitle">Recurring Events</div>
                <div className="calendar_container">
                  <div className="calendar_underliner"></div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Monday">
                      MON
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">Morning Prayer @8:00AM</div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Tuesday">
                      TUE
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div classname="eventSub">Morning Prayer @8:00AM</div>
                      <div classname="eventSub">Small Group</div>
                    </div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Wednesday">
                      WED
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div className="eventSub">Morning Prayer @8:00AM</div>
                      <div className="eventSub">Prayer Meeting @9:00PM</div>
                    </div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Thursday">
                      THU
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div classname="eventSub">Morning Prayer @8:00AM</div>
                      <div classname="eventSub">Small Group</div>
                    </div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Friday">
                      FRI
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div className="eventSub">Morning Prayer @8:00AM</div>
                      <div className="eventSub">Large Group @7:15PM</div>
                    </div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Saturday">
                      SAT
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div className="eventSub">Morning Prayer @10:00AM</div>
                    </div>
                  </div>
                </div>
                <div className="weekSubContainer">
                  <div className="day">
                    <div className="dayContainer" id="Sunday">
                      SUN
                    </div>
                  </div>
                  <div className="event">
                    <div className="eventContainer">
                      <div className="eventSub">Local Church Services</div>
                      <div className="eventSub">Prayer Meeting @4:00PM </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <div className="specialEvents">
            <Fade duration="5000">
              <div className="SmallGroupJoin">
                <Link className="linkExec" to="/connect">
                  Join A Small Group
                </Link>
                <br />
                Tuesday | Thursday
              </div>
            </Fade>
            <Carousel
              style={{
                "max-width": "630px",
                "max-height": "400px",
                margin: "0 auto",
              }}
            >
              <Carousel.Item>
                <div className="retreatPic Easter"></div>
                <p className="retreatTitle">2022 Easter Sunrise Service</p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="retreatPic Mens"></div>
                <p className="retreatTitle">2022 Mens Retreat</p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="retreatPic Vision"></div>
                <p className="retreatTitle">2022 Holy Vision</p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="retreatPic Spring"></div>
                <p className="retreatTitle">2022 Spring Retreat</p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="retreatPic Harvest"></div>
                <p className="retreatTitle">2022 Harvest Retreat</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
