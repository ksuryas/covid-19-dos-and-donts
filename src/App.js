import React, { Component } from 'react';
import './index.css';
import { Switch, Route, Redirect } from 'react-router';
import NavBar from './components/NavBar';
import Symptoms from './components/Symptoms/Symptoms';
import PrecautionGuide from './components/Precautions/PrecautionGuide/PrecautionGuide';
import TimeUsage from './components/TimeUsage/TimeUsage';
import LessonsLearned from './components/LessonsLearned/LessonsLearned';
import Covidometer from './components/Covidometer/Covidometer';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Symptoms} exact />
        <Route path="/precaution-guide/" component={PrecautionGuide} />
        <Route path="/time-usage/" component={TimeUsage} />
        <Route path="/lessons-learned/" component={LessonsLearned} />
        <Route path="/coronavirus-live-stats/" component={Covidometer} />
        <Redirect to="/" />
      </Switch>
    );
  return (
    <div className="Container">
      <NavBar />
     {routes}
    </div>
  );
  }
}

export default App;