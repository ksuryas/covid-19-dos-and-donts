import React, { Component } from 'react';
import './LessonsLearned.css';
import '../../index.css';

class LessonsLearned extends Component {
    render() {
        return (
            <div className="MainContent">
                <h2>Environmental Benefits Achieved</h2>
                <ul className="SpacingUL">
                    <li className="Bullets">Pollution has reduced immensely</li>
                    <li className="Bullets">Cleaner Air and Clearer Water</li>
                    <li className="Bullets">Less Harmful Gas Emissions</li>
                    <li className="Bullets">Plants are Healthier</li>
                    <li className="Bullets">Birds and Animals feel "at home"</li>
                </ul>

                <h2 className="SpacingH2">Lessons Learned</h2>
                <ul>
                    <li className="Bullets">Protect our environment and treat the nature well</li>
                    <li className="Bullets">Power, beauty, and money are worthless and can't get you the awesome gift of life</li>
                    <li className="Bullets">Don't get trapped by anger, anxiety and greed</li>
                    <li className="Bullets">Stay strong and positive during difficult situations</li>
                    <li className="Bullets">Eat Healthy and Exercise because Health is wealth!</li>
                    <li className="Bullets">Maintain hygiene and cleanliness</li>
                    <li className="Bullets">Rejuvenate yourself once in a while</li>
                    <li className="Bullets">Spend quality time with family and friends as they are precious</li>
                    <li className="Bullets">Appreciate people who help the society</li>
                </ul>
            </div>
        );
    }
 };

export default LessonsLearned;