//import React from 'react';
import './App.css'
import { Navbar, NavbarBrand } from 'reactstrap'

function App() {

  return (
    <>
      <Navbar color="dark" dark fixed='top'>
        <NavbarBrand >
          <img className='logo' src="/animalWell.png" />
        </NavbarBrand>
        <div className='whitetext'>
          Some Placeholder
        </div>
        <div className='whitetext'>
          Another Placeholder
        </div>
        <div className='whitetext'>
          Placeholder
        </div>
      </Navbar>
    </>
  )
}

export default App
