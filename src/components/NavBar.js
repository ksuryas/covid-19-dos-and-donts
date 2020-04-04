import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/covid19.JPG';

class NavBar extends Component {
    render() {
        return (
            <header className="NavBar">
            <a href="/"><img src={logo} width="300px" height="145px" alt="App logo - COVID-19" /></a>
            <h3>Welcome to our app! Hope you learn something.</h3>
            <p>Navigate here:</p>
            <a href="/" className="NavBar-a" target="_blank">COVID-19 Symptoms - Home Page</a>            
            <br />
            <a href="/precaution-guide" className="NavBar-a" target="_blank">Precaution Guide (Dos and Don'ts)</a>
            <br />
            <a href="/time-usage" className="NavBar-a" target="_blank">Using your Time Effectively</a>
            <h5>Thank you for visting my app! #StayHomeStaySafe!</h5>
          </header>
        );
    }
};

export default NavBar;