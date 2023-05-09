import React from 'react';
import { Container, Row } from 'react-bootstrap';

import LandingPic from '../img/backgrounds/Landing.png';

function Home() {
  return (
    <>
    <Container style={{ backgroundImage: `url(${LandingPic})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Row className="justify-content-center">

      </Row>
    </Container>
    </>
  );
}

export default Home;
