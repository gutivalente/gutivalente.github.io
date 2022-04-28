import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import '../css/Portfolio.css';
import { portfolioCards } from '../EditMe';

function Portfolio() {
  return (
    <Container className="portfolio-container">
      <h2 className='portfolio-heading'>Portfólio</h2>

      <Row style={{ justifyContent: "center" }}>
        {portfolioCards.map((card) =>
          <Col xs={12} md={6} lg={4} className="portfolio-card">
            <div className="card-info">
              <Row>
                <Col xs={10} className="card-title">{card.projectTitle}</Col>
              </Row>

              <Row>
                <img className='card-img' src={card.projectImage} alt='' />
              </Row>

              <Row>
                <Col className="card-desc">{parse(card.projectDesc)}</Col>
              </Row>

              <Row>
                <Button className='card-btn' href={card.projectURL} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Projeto
                </Button>

                {!!card.projectSourceURL &&
                  <Button className='card-btn' href={card.projectSourceURL} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} /> Fonte
                  </Button>
                }
              </Row>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Portfolio;
