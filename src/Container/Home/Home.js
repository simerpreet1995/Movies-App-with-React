import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <main className='homePage'>
    <Container>
      <Row>
        <Col className='col-12'>
          Hello i am a Home Page Container
        </Col>
      </Row>
    </Container>
    </main>
  )
}

export default Home
