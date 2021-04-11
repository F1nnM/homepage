import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from './components/Menu';
import Name from './components/Name';

function App() {
  return (
    <Container fluid className={styles.app} >
      <Row className="h-100">
        <Col className="h-100 d-flex text-center">
          <Name />
        </Col>
        <Col className="h-100 d-flex">
          <Menu />
        </Col>
        <Col>

        </Col>
      </Row>

    </Container>
  );
}

export default App;
