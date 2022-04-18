import parse from 'html-react-parser';
import React from 'react';
import '../css/AboutMe.css';
import { aboutMe } from '../EditMe';

function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="main">
                {parse(aboutMe.description)}
            </div>
            <div className="sub-quote">
                {aboutMe.quote}
            </div>
        </div>
    );
}

export default AboutMe;
