import React, { Component } from 'react';
import './index.css';
import { Switch, Route, Redirect } from 'react-router';
import PrecGuide from './components/Route/PrecGuide';
import HomePage from './components/Route/HomePage';
import TimeUse from './components/Route/TimeUse';
import CoronavirusTaughtUs from './components/Route/CoronavirusTaughtUs';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/precaution-guide/" component={PrecGuide} />
        <Route path="/time-usage/" component={TimeUse} />
        <Route path="/lessons-taught-by-coronavirus/" component={CoronavirusTaughtUs} />
        <Redirect to="/" />
      </Switch>
    );
  return (
    <div className="Text">
      <NavBar />
     {routes}
    </div>
  );
  }
}

export default App;