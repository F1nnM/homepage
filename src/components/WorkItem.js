import { Badge, Button, Card, Col, Row } from "react-bootstrap";

import GitHub from '@material-ui/icons/GitHub'
import CloudUpload from '@material-ui/icons/CloudUpload'
import { useIsVisible } from 'react-is-visible'

import styles from './WorkItem.module.css'
import { useRef } from "react";

function WorkItem({ data, visibilityChanged }) {

  const ref = useRef()
  visibilityChanged(useIsVisible(ref))

  return (
    <Card ref={ref} className={styles.card + " flex-shrink-0"}>
      <Row className='no-gutters h-100'>
        <Col xl={6} className='d-flex'>
          <Card.Img className={styles.image} src={data.image} />
        </Col>
        <Col xl className={styles.description}>
          <Card.Body className={styles.cardBody + " h-100 d-flex flex-column justify-content-between"}>
            <Card.Title className={styles.title}>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Card.Text>
              Languages used:<br/>
              {
                data.languages.map(lang => {
                  return (
                    <Badge key={lang} variant="light" className={styles.badge}>{lang}</Badge>
                  );
                })
              }
            </Card.Text>
            <Card.Text>
              Technologies used:<br/>
              {
                data.technologies.map(tech => {
                  return (
                    <Badge key={tech} variant="light" className={styles.badge}>{tech}</Badge>
                  );
                })
              }
            </Card.Text>
            <div className="flex-grow-1" />
            <div className="flex-grow-0">
              <Button onClick={_ => window.open(data.github)} variant="dark" className={styles.githubButton}><GitHub/>View source</Button>
              <Button onClick={_ => window.open(data.live)} variant="primary"><CloudUpload />Live version</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default WorkItem;
