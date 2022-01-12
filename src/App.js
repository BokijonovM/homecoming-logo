import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IronMan from './components/IronMan';
import Spider from './components/Spider';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <div className='neon-wrapper py-4 pl-3'>
          <h1 className='neon-text'>SpiderMan</h1> 
          <h1 className='neon-text mb-0 pb-1'>HomeComing</h1>
        </div>
      
     
        <Row className='main-row' style={{ flexWrap: "nowrap" }}>
          <Col md={6} className='p-0 pl-3 pt-5' style={{ paddingRight: "0px" }}>
            <IronMan />
          </Col>
          <Col md={6} className='p-0 pl-3 pt-5'  >
            <Spider />
          </Col>
        </Row>
     
    </div>
  );
}

export default App;
