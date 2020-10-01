import React from "react";
import Header from "../components/Header";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function About() {
  return (
    <div>
      <Header backgroundImage="https://i.imgur.com/obgpMIf.jpeg">
        <h1>Hello</h1>
        <h2>I am Suresh Kumar</h2>
      </Header>
      {/* <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12"> */}
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

      {/* </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default About;