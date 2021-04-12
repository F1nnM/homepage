import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from './components/Menu';
import Name from './components/Name';
import Content from './components/Content';

function App() {
  return (
    <Container fluid className={styles.app} >
      <Row className="h-100">
        <Col md="auto" className="h-100 d-flex text-center">
          <Name />
        </Col>
        <Col md="auto" className="h-100 d-flex">
          <Menu />
        </Col>
        <Col>
          <Content/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
