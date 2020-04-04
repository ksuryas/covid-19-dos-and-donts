import React, { Component } from 'react';
import '../../index.css';
import classes from './Symptoms.module.css';

class Symptoms extends Component {
  render() {
  return (
    <div className="Text">
        <h1>Symptoms of Coronavirus (COVID-19)</h1>
      <ul>
        <li>Mild Headache</li>
        <li>Fever</li>
        <li>Tiredness</li>
        <li>Dry Cough</li>
        <li>Cold or Diarrhea</li>
        <li>ARDS - Acute Respiratory Distress Syndrome which means trouble breathing (for severe patients)</li>
      </ul>
      <div className={classes.Recovery}>
      <h2 className={classes.RecoveryForH2}>Recovery FAQ:</h2>
      <ul>
      <li><strong>When can I recover?:</strong> 
      You can recover in approximately 2 weeks 
      if you've mild symptoms or 3-6 weeks for patients with critical disease.
      </li>
      <li><strong>How much will I recover?:</strong> 100%!</li>
      <li><strong>How long will the virus stay in my body after I recover?:</strong> 6 days or more</li>
      <li><strong>Can I catch COVID-19 a second time?:</strong> 
      Yes. This is why you've to be careful even after you fully recover.
      </li>
      </ul>
      </div>
      <h2>More Questions?:</h2>
      <p>Learn more at <a href="who.int/news-room/q-a-detail/q-a-coronaviruses" 
          className={classes.MoreFAQForAnchor}
          target="_blank">World Health Organization</a>!</p>
   </div>
  );
  }
}

export default Symptoms;