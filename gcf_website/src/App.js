import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Staff from "./components/staff.js";
import Ministries from "./components/ministries.js";
import Events from "./components/events.js";
import Support from "./components/support.js";
import Pictures from "./components/pictures.js";
import Connect from "./components/connect.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/staff_and_leadership" component={Staff} />
        <Route path="/ministries" component={Ministries} />
        <Route path="/events" component={Events} />
        <Route path="/support" component={Support} />
        <Route path="/pictures" component={Pictures} />
        <Route path="/connect" component={Connect} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
