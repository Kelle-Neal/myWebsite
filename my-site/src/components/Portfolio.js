import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container>
        <h1 className="text-center py-5">Portfolio</h1>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/237/200/150" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  This is a short description of project 1.
                </Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/238/200/150" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  This is a short description of project 2.
                </Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/239/200/150" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  This is a short description of project 3.
                </Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
