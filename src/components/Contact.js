
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
        if (!data.ok)
          throw new Error("Non 200 return code!");
        alert("Thank you for your message! I will get back to you soon!");
        formRef.reset();
      })
      .catch((err) => {
        alert("Sorry, an error occurred. Something apparently broke. Please message me at web@mfinn.de.");
        console.warn(err);
      });
  }

  var formRef;

  return (
    <Form className={styles.form + " d-flex flex-column justify-content-center"} ref={(el) => formRef = el}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" onChange={e => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address for replies</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setMail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={5} onChange={e => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={send}>
        Submit
      </Button>
      <span className="mt-4">Or alternatively: <a href="mailto:contact@mfinn.de">contact@mfinn.de</a></span>
    </Form>
  );
}

export default Contact;
