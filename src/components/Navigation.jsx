import { Button, Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, Nav, NavLink } from 'reactstrap'
import { useState } from 'react'
import Login from './Login';
import { useLogin } from './LoginContext';


const Navigation = () => {

  const [collapse, setCollapse] = useState(false)
  const {toggleLogin} = useLogin()

  const toggleNav = () => setCollapse(!collapse)

  return (
    <>
      <Login />

      <Navbar className='nav' color="dark" expand="md" dark>
        <NavbarBrand href='/'>
          <img className='logo' src="/BlueLogo.png" />
        </NavbarBrand>

        <NavbarToggler className='ms-auto me-4' onClick={toggleNav}/>

        {/* Button for responsive small screens*/}
        <Button className='d-md-none' color='info' onClick={toggleLogin}>Log in</Button>


        <Collapse className='me-3' isOpen={collapse} navbar>
        {/* ms-auto ensures right placement */}
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink href='https://github.com/Aaland01' target='_blank'>
                Github
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Final Placeholder
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        {/* Button for large screens - ensuring right placement */}
        <Button className='d-none d-md-block' color='info' onClick={toggleLogin}>Log in</Button>
      </Navbar>

    </>
  )
};

export default Navigation;