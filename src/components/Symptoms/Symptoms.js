import React, { Component } from 'react';
import classes from './Symptoms.module.css';
import '../../index.css';

class Symptoms extends Component {
  render() {
    return (
      <div className="MainContent">
        <div className={classes.Bullets}>
          <h1>Symptoms of Coronavirus</h1>
          <ul className={classes.BulletPoints}>
            <li>Mild Headache</li>
            <li>Fever</li>
            <li>Tiredness</li>
            <li>Dry Cough</li>
            <li>Cold or Diarrhea</li>
            <li>ARDS - Acute Respiratory Distress Syndrome which means shortness of breathing (for severe patients)</li>
          </ul>
          {/* Symptoms Group Above */}

          <h2 className={classes.RecoveryForH2}>Recovery FAQ:</h2>
          <ul className={classes.BulletPoints}>
            <li><strong>When can I recover?:</strong> You can recover in approximately 2 weeks
      if you've mild symptoms or 3-6 weeks if you're critical.
      </li>
            <li><strong>How much will I recover?:</strong> 100%!</li>
            <li><strong>How long will the virus stay in my body after I recover?:</strong> 6 days or more</li>
            <li><strong>Can I catch COVID-19 a second time?:</strong> Yes.
      This is why you've to be careful even after you fully recover.
      </li>
          </ul>
          {/* Recovery FAQ Group Above */}

          <h2>More Questions?:</h2>
          <p>Learn more at <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
            className={classes.MoreFAQForAnchor}
            target="_blank"
            rel="noopener noreferrer">World Health Organization Coronavirus Page</a> or watch the video
          below!
       </p>
        </div>
        <iframe
          className={classes.MoreFAQForIframe}
          src="https://www.youtube.com/embed/mOV1aBVYKGA"
          frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title="About COVID-19">
        </iframe>
        {/* More FAQ Group Above */}
      </div>
    );
  }
}

export default Symptoms;