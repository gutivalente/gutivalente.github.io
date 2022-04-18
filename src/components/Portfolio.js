import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/Portfolio.css';
import { portfolioCards } from '../EditMe';

function Portfolio() {
    return (
        <Container className="portfolio-container">
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
                                <a href={card.projectSourceURL} target='_blank' rel='noreferrer' className="url-icon">
                                    <FontAwesomeIcon icon={faGithub} /> Fonte
                                </a>
                                <a href={card.projectURL} target='_blank' rel='noreferrer' className="url-icon">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Projeto
                                </a>
                            </Row>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Portfolio;
