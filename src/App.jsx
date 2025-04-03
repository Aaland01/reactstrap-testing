//import React from 'react';
import './App.css'
import {Col, Container, Row} from 'reactstrap'
import Navigation from './components/Navigation';
import { LoginWrapper } from './components/LoginContext';
function App() {

  return (
    <>
      <LoginWrapper>
        <Navigation />
        <Container className='cont'>
          <Row className='row'>
            <Col className='column1'>
              Explore a dense, interconnected labyrinth, and unravel its many secrets. 
              Collect items to manipulate your environment in surprising and meaningful ways. 
              Encounter beautiful and unsettling creatures, as you attempt to survive what lurks 
              in the dark. There is more than what you see.
            </Col>
            <Col className='column2'>
              <img className='image' src='animalWell.png'/>
            </Col>
          </Row>
        </Container>
      </LoginWrapper>
    </>
  )
}

export default App
