import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../css/Experience.css';
import { experience } from '../EditMe';

function Experience() {
  return (
    <Row className="experience-container">
      <h2 className='experience-heading'>Experiência</h2>

      <Col xs={12} className="experience-section">
        {experience.experiences.map((company) =>
          <Row className="company">
            <Col xs={12} md={3} style={{ textAlign: "right" }}>
              <img className="companyLogo" alt='' src={clsx({
                'https://quarkerp.com.br/images/logo-placeholder.png': company.companyLogo === "",
                [company.companyLogo]: company.companyLogo !== "",
              })} />
            </Col>

            <Col xs={12} md={9} className="companyDetails">
              <p className="companyName">{company.companyName}</p>
              <p className="companyLocation">{company.companyLocation}</p>
              {company.roles.map((role) =>
                <>
                  <p className="role">• {role.role}</p>
                  <p className="role-time">{role.startPeriod} - {role.endPeriod}</p>
                  <p className="role-desc">{parse(role.description)}</p>
                </>
              )}
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default Experience;
