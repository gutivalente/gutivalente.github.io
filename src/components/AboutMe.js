import parse from 'html-react-parser';
import React from 'react';
import '../css/AboutMe.css';
import { aboutMe } from '../EditMe';

function AboutMe() {
  return (
    <div className="aboutme-container">
      <h2 className='aboutme-heading'>Sobre</h2>

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
