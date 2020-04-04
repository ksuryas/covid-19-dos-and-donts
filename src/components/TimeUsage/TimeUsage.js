import React, { Component } from 'react';
import '../../index.css';

class TimeUsage extends Component {
    render() {
        return (
            <div className="Text">
                   <h1>Using your Time Effectively during Quarantine (Lockdown)</h1> 
                   <p>Here are somethings that you can do to not feel bored:</p>
                  
                   <h2>Kids can:</h2>
                   <ol>
                       <li>Pursue their passion. 
                           For example, sing in front of a mirror/record a song sung by them/listen to songs 
                           if singing is their passion!
                           </li>
                           <li>Play board games and/or outdoor games in your backyard.</li>
                           <li>Eat and drink A LOT!</li>
                           <li>Study and keep their brain active.</li>
                   </ol>

                   <h2>Adults can:</h2>
                   <ol>
                       <li>Help their kids.</li>
                       <li>Spend time with their kids.</li>
                   </ol>
                  
                   <h2>Old people can:</h2>
                   <ol>
                       <li>Relax!</li>
                       <li>Enjoy!</li>
                   </ol>
                  
                   <h2>Everyone can:</h2>
                   <ol>
                       <li>Do yoga!</li>
                       <li>Watch TV at times.</li>
                       <li>Talk to your family.</li>
                       <li>Read books.</li>
                   </ol>
            </div>
        );
    }
};

export default TimeUsage;