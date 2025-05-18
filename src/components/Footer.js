import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg'; // e.g., LinkedIn
import navIcon2 from '../assets/img/nav-icon2.png'; // e.g., GitHub

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/steph-vo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a
                                href="https://github.com/stephanie-vo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon2} alt="GitHub" />
                            </a>
                        </div>
                        <p>© 2023 Stephanie Vo. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
