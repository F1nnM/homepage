
import { Button, Form } from 'react-bootstrap';

import styles from './Contact.module.css'

function Contact() {
  return (
    <Form className={styles.form + " d-flex flex-column justify-content-center"}>
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
