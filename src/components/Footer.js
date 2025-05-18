import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import reactLogo from '../assets/img/logo192.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col sm={4}>
                        <img src={logo} alt="Site Logo" />
                    </Col>
                    <Col sm={4} className="text-center my-2">
                        <div className="react-built">
                            <p style={{ marginBottom: '4px' }}>Built with React</p>
                            <img src={reactLogo} alt="React Logo" style={{ width: '30px' }} />
                        </div>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/steph-vo/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/stephanie-vo" target="_blank" rel="noopener noreferrer">
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
