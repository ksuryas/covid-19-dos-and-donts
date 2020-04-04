import React, { Component } from 'react';
import './index.css';
import { Switch, Route } from 'react-router';
import PrecGuide from './components/Route/PrecGuide';
import HomePage from './components/Route/HomePage';
import TimeUse from './components/Route/TimeUse';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/precaution-guide" component={PrecGuide} />
        <Route path="/time-usage" component={TimeUse} />
      </Switch>
    );
  return (
    <div className="Text">
     {routes}
  </div>
  );
  }
}

export default App;