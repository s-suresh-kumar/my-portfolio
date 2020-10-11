import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./about.css"
let imgName = "/assets/images/headerImage.jpeg";
let authorPic = "/assets/images/Suresh_150.jpg"


function About() {
  return (
    < div >
      <Header backgroundImage={process.env.PUBLIC_URL + imgName}>
        <h1>Hello</h1>
        <h2>Welcome To My Portfolio</h2>
        <div className="row mb-2 pb-2">
          <div className="card1 mb-2 pb-2">
            <div className="card-body">
              <h6 className="text-center">Contact Info</h6>
              <hr className="pl-4 pr-4 mpb-1 abssolid" />
              <ul className="no-bullets mb-2 pb-2 ">
                <li>
                  <strong >Email:
                    <a target="_blank" className="tab4" href="mailto:sureshk01@gmail.com "> sureshk01@gmail.com</a></strong>
                </li>
                <li>
                  <strong className="tab4">Phone:
                  919-760-3970</strong>
                </li>
                <li>
                  <strong>Github:
                <a target="_blank" className="tab4" href="https://github.com/s-suresh-kumar"> s-suresh-kumar</a></strong>
                </li>
                <li>
                  <strong>LinkedIn:
                <a target="_blank" className="tab4" href="https://www.linkedin.com/in/suresh-s-kumar"> suresh-s-kumar</a>
                  </strong>
                </li>
                <li>
                  <strong>Portfolio:
                <a target="_blank" className="tab4" href="https://s-suresh-kumar.github.io/responsivePortfolio/portfolio.html">  my-portfolio</a></strong>
                </li>
                <li className="mb-2 pb-2">
                  <strong>Resume:
                <a target="_blank" className="tab4" href="./assets/Resume-Suresh-Kumar-09-28-2020">  My resume</a></strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <img src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="Author image" />
            <p>
              I live in Cary, North Carolina. I am a natural problem solver. I
              like to add new features in existing products and software,
              improve functionality and add value. I like to debug and provide
              fixes to customer or user found issues to make the software /
              product robust. I have extensively worked on different telecom
              products in the area of application software and system software
              using languages such as C , C++. I have varied experience in
              management plane, control plane of different core and edge
              telecome products such as Digital Switch (Telephone), ISDN
              customer premises equipment, Mobile Switching Center (S-12),
              Signaling Transfer Point product, Fiber To The User APON / BPON/
              GPON telecom access products. I have extensive Real Time Operating
              System based system application software development in a
              distributed highly available fault tolerant systems. I intend to
              keep myself abreast with ever changing emerging software
              technologies. Currently I am interested in Full Stack Web
              development and my dream is to master Full Stack Web Development
              technologies and become a Full Stack Web developer.
            </p>
            <p>
              I am detail oriented collaborative software engineer I am adept in
              both agile and SDLC sotware development methologies. I have
              extensive experience in all phases of software development right
              from Requirements gathering to Integration Testing and supporting
              Test Team, Customer Focus Teams. I have worked and solved several
              customer reported complex issues in a timely manner and supported
              customer facing teams. I want to bring my software development and
              debugging skills to Full Stack Development in both front-end and
              back-end areas.
            </p>

          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;