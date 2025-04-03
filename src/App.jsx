//import React from 'react';
import { useState } from 'react'
import './App.css'
import { Button, FormGroup, Input, Form, Label, Modal, ModalBody, ModalFooter, ModalHeader, Navbar, NavbarBrand, Col, Container, Row, Collapse, NavbarToggler, NavItem, Nav, NavLink } from 'reactstrap'

function App() {

  const [modal, setModal] = useState(false)
  const [collapse, setCollapse] = useState(false)

  const toggle = () => setModal(!modal);
  const toggleNav = () => setCollapse(!collapse)

  return (
    <>
      <Navbar className='nav' color="dark" expand="md" dark>
        <NavbarBrand >
          <img className='logo' src="/animalWell.png" />
        </NavbarBrand>

        <NavbarToggler className='ms-auto me-4' onClick={toggleNav}/>
        <Button className='d-md-none' color='info' onClick={toggle}>Log in</Button>


        <Collapse className='ms-2' isOpen={collapse} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink>
                Some Placeholder
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Placeholder two
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Final Placeholder
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <Button className='d-none d-md-block' color='info' onClick={toggle}>Log in</Button>
      </Navbar>
      

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
      <Modal className='window login' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="username">
                Username
              </Label>
              <Input 
              id="username" 
              name="username"
              placeholder=""
              type="username"/>
            </FormGroup>
            <FormGroup row>
              <Label for="password">
                Password
              </Label>
              <Input 
              id="password" 
              name="password"
              placeholder=""
              type="password"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success">Log in</Button>
          <Button color="danger">Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default App
