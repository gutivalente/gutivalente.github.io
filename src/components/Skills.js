import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import '../css/Skills.css';
import { skills } from '../EditMe';

function Skills() {

  return (
    <Container className="skills-section">
      <h2 className='skills-heading'>Habilidades</h2>

      <Row>
        <Col xs={12} sm={6}>
          <PieChart
            data={skills.skillsData}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
              fill: skills.skillsData[index].color,
              fontSize: skills.fontSize,
            })}
            radius={skills.radius}
            labelPosition={skills.labelPosition}
            lineWidth={skills.lineWidth}
            paddingAngle={skills.paddingAngle}
          />
        </Col>

        <Col xs={12} sm={6} className="skills-panel">
          {skills.skillsData.map((skill) =>
            <p>
              <img className='skills-icon' src={skill.iconUrl} alt='' />
              <span className="skills-highlight">{skill.title}</span><br />
              <span className='skills-desc'>{skill.description ? skill.description : null}</span>
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
