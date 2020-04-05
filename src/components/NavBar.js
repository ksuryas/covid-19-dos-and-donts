import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/covid19.JPG';

class NavBar extends Component {
    render() {
        return (
            <header className="NavBar">
            <a href="/"><img src={logo} width="290px" alt="Logo of COVID 101" /></a>
            <h4 style={{marginBottom: '0px'}}>Welcome to COVID 101!</h4>
            <p style={{marginTop: '0px'}}>Navigate here:</p>
            <a href="/" className="NavBar-a">COVID-19 Symptoms - Home Page</a>            
            <br />
            <a href="/precaution-guide/" className="NavBar-a">Precaution Guide (Dos and Don'ts)</a>
            <br />
            <a href="/time-usage/" className="NavBar-a">11 Ways to Use your Time Effectively</a>
            <br />
            <a href="/lessons-taught-by-coronavirus/" className="NavBar-a">Environmental Benefits {"&"} Lessons Learned</a> 
            <h5>Thank you for visting! #StayHomeStaySafe!</h5>
            <h5>Contact Surya Kasibhatla, Grade 6.</h5>
          </header>
        );
    }
};

export default NavBar;