import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/Profile.css';
// Value Import
import { information, socials } from '../EditMe';

function Profile() {
    return (
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub">{information.welcomeMsg}</p>
                    <p className="greeting-name">{information.fullName}</p>
                </Col>
                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img className="profile-img" src={information.profilePhoto} alt={information.fullName + "'s profile"}></img>
                    </div>
                    <div className="profile-socials">
                        {/* <a target="_blank" rel="noreferrer" href={socials.twitterURL} className="profile-twitter">
                            <FontAwesomeIcon icon = { faTwitter } />
                        </a> */}
                        <a target="_blank" rel="noreferrer" href={socials.githubURL} className="profile-github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socials.linkedinURL} className="profile-linkedin">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{information.aboutMe}</p>
                    <p className="lower-profile-text-sub">{information.companyName}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
