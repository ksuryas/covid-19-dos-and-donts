import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/covid19.JPG';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
            <a href="/"><img src={logo} className="NavBar-logo" alt="Logo of COVID 101" /></a>
            <h4>Welcome to COVID 101!</h4>
            <a href="/" className="NavBar-a">COVID-19 Symptoms</a>            
            <a href="/precaution-guide/" className="NavBar-a">Precaution Guide</a>
            <a href="/time-usage/" className="NavBar-a">Using your Free Time</a>
            <a href="/lessons-taught-by-coronavirus/" className="NavBar-a">Lessons Learned</a> 
            <h5>Thank you for visting! #StayHomeStaySafe!</h5>
            <h5 style={{marginTop:"0px"}}>Contact Surya Kasibhatla, Grade 6.</h5>
          </div>
        );
    }
};

export default NavBar;