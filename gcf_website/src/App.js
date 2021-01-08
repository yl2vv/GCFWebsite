import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Staff from "./components/staff.js";
import Ministries from "./components/ministries/ministries.js";
import Inreach from "./components/ministries/inreach.js";
import Outreach from "./components/ministries/outreach.js";
import Events from "./components/events.js";
import Supporters from "./components/supporters.js";
// import Pictures from "./components/pictures.js";
import Connect from "./components/connect.js";
import Footer from "./components/footer.js";


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/staff_and_leadership" component={Staff} />
        <Route exact={true} path="/ministries" component={Ministries} />
        <Route path="/ministries/inreach" component={Inreach} />
        <Route path="/ministries/outreach" component={Outreach} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Supporters} />
        {/* <Route path="/pictures" component={Pictures} />  */}
        <Route path="/connect" component={Connect} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
