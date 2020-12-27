import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Staff from './components/staff.js';
import Ministries from './components/ministries.js';
import Events from './components/events.js';
import Supporters from './components/supporters.js';
import Pictures from './components/pictures.js';
import Connect from './components/connect.js';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/staff_and_leadership' component={Staff} />
        <Route path='/ministries' component={Ministries} />
        <Route path='/events' component={Events} />
        <Route path='/supporters' component={Supporters} />
        <Route path='/pictures' component={Pictures} />
        <Route path='/connect' component={Connect} />
      </Switch>

    </Router>
  );
}

export default App;
