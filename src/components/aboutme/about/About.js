import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Muhammad Nabil Hatami </b> 
                  and I am a <b className="purple">Computer Science and Engineering </b> 
                    student at <b className="purple">Universitas Nahdlatul Ulama Indonesia </b>
                      in Jakarta, Indonesia.
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with cloud platforms  
                    <b className="purple"> AWS & Google Cloud.{" "}</b>
                
                <br />
                I also work with frameworks and libraries like &nbsp;
                  <b className="purple">
                    NodeJS, ReactJS, Pandas, and NumPy.
                  </b>
                <br />
                <br />
                Whenever possible, I apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    Modern Javascript Libraries and Frameworks.
                  </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products.</b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
