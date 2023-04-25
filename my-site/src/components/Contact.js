import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact me</h2>
          <p className="lead">You can reach out to me by filling out the form below.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send message</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
