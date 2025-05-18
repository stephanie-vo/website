import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ToastBot",
      description: "A Modern Solution to Precision Toasting",
      imgUrl: projImg1,
      link: "https://github.com/stephanie-vo/toastbot",

    },
    {
      title: "Automated Solar Tracker",
      description: "Dual-axis solar tracking system to optimize solar panel alignment with the sun using photoresistors.",
      imgUrl: projImg2,
      link: "https://github.com/stephanie-vo/solar-tracker",
    },
    {
      title: "Ultrasonic Range Finder",
      description: "This project involved designing and building a fully analog and digital ultrasonic range finder using discrete components (no microcontroller). The system measures distances between 10 cm to 99 cm with a target accuracy of ±1 cm, displaying real-time measurements on a dual 7-segment display.",
      imgUrl: projImg3,
      link: "https://stephvo.notion.site/Ultrasonic-Range-Finder-1e9cfa89fac280efa46aed94fb452994",

    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', width: '100%' }}
                        >
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
