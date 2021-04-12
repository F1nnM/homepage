
import { Button, Form } from 'react-bootstrap';

function Contact() {
  return (
    <Form className="d-flex flex-column justify-content-center pr-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address for replies</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
