import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from './components/Menu';
import Name from './components/Name';
import Content from './components/Content';

import 'intersection-observer'

function App() {
  return (
    <Container fluid className={styles.app} >
      <Row className={styles.layoutRow + " h-100 m-0"}>
        <Col md="auto" className={styles.col + " d-flex text-center"}>
          <Name />
        </Col>
        <Col md="auto" className={styles.col + " d-flex "}>
          <Menu />
        </Col>
        <Col className={styles.col  + " d-flex d-flex-shrink"}>
          <Content/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
