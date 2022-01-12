import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IronMan from './components/IronMan';
import Spider from './components/Spider';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row className='main-row' style={{ flexWrap: "nowrap" }}>
          <Col md={6} className='pr-0' style={{ paddingRight: "0px" }}>
            <IronMan />
          </Col>
          <Col md={6} className='pl-0'  >
            <Spider />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
