
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import styles from './Contact.module.css'

function Contact() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  function send() {
    const url = "https://contact.mfinn.de";
    const options = {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: mail,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((data) => {
        console.log(data);
        alert(data);
      })
      .catch((err) => {
        alert("Sorry, an error occurred. Something apparently broke. Please message me at web@mfinn.de.");
        console.warn(err);
      });
  }

  return (
    <Form className={styles.form + " d-flex flex-column justify-content-center"}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address for replies</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setMail(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={5} onChange={e => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={send}>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
