import React, { Component } from 'react';
import classes from './TimeUsage.module.css';
import TimeTogether from '../../assets/backgroundImages/TimeUse.jpg';

class TimeUsage extends Component {
    render() {
        return (
            <div className={classes.TimeUsage}>
                   <h1>11 Ways to Use your Time Effectively during Quarantine (Lockdown)</h1> 
                       <ol className={classes.TimeUsageText}>
                       <li>Spend quality family time!</li> 
                       <li>Video call family and friends.</li>
                       <li>Play games.</li>
                    
                       <li>Eat and drink healthy!</li>
                       <li>Excercise.</li>
                       <li>Clean your house.</li>

                      <li>Pursue your passion.</li>
                      <li>Learn new skills.</li>
                      <li>Expand your creativity.</li>
                      <li>Enhance exsisting skills.</li>
                      <li>Read books.</li>   
                 </ol>
                 <img className={classes.TimeUsageImage} alt="Time Together" src={TimeTogether} />
            </div>
        );
    }
};

export default TimeUsage;