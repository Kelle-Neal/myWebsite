import { Container, Row, Col } from 'react-bootstrap';
import BackgroundPic from '../img/backgrounds/15.png';
// import QRCode from '../img/Kelle_Neal.png';


function Contact() {
  return (
    <Container style={{ backgroundImage: `url(${BackgroundPic})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact me</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
