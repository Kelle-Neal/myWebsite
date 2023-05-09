import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <div id="about">
      <Container>
        <h1 className="text-center py-5">About Me</h1>
        <Row>
          <Col md={6}>
            <Image src="#" fluid />
          </Col>
          <Col md={6}>
            <p>Info about me</p>
            <p>More info about me.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
