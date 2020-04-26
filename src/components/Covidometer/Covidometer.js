import React from 'react';
import classes from './Covidometer.module.css';

const Covidometer = () => {
    return (
        <div>
            <h1>Live Stats of COVID-19</h1>
            <iframe src="https://covidometer-1012.firebaseapp.com" title="My Corona Tracker Website" className={classes.CoronaTracker}></iframe>
            <h3>Credit goes to the <a href="https://covid19.mathdro.id/api">Mathdroid Coronavirus API</a> for the data.</h3>
        </div>
    ); 
};

export default Covidometer;