import { Button, FormGroup, Input, Form, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import { useLogin } from './LoginContext';
import { useState } from 'react';


/**
   * The url for the API we are testing with
   */
export const API_URL = "http://4.237.58.241:3000"

const Login = () => {

  // Login context
  const {showLogin, toggleLogin} = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const url = `${API_URL}/user/login`;

    return fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // temporary hardcoded credentials
      body: JSON.stringify({
        email: username,
        password: password
      }),
    })
    .then((res) => 
      res.json()
        .then((res) => {
          //!WARNING this is not industry standard or safe
          // but a simplification. Better methods later
          localStorage.setItem("token", res.bearerToken.token)
          console.log(res)
        })
    )
    .catch(error => console.error(error));
  };


  /**
   * Dev method
   * 
   */
  const cheatLogin = () => {
    const url = `${API_URL}/user/login`;

    return fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // temporary hardcoded credentials
      body: JSON.stringify({
        email: "mike@gmail.com",
        password: "password"
      }),
    })
    .then((res) => 
      res.json()
        .then((res) => {
          //!WARNING this is not industry standard or safe
          // but a simplification. Better methods later
          localStorage.setItem("token", res.bearerToken.token)
          console.log(res)
        })
    )
    .catch(error => console.error(error));
  };

  return (
    <>
      <Modal className='window login' isOpen={showLogin} toggle={toggleLogin}>
        <ModalHeader toggle={toggleLogin}>
          Login
        </ModalHeader>
        <Form onSubmit={e => {
          e.preventDefault();
          login();
        }}>
          <ModalBody>
            <FormGroup row>
              <Label for="username">
                Username
              </Label>
              <Input 
                id="username" 
                name="username"
                placeholder=""
                type="text"
                value={username}
                onChange={ e => setUsername(e.target.value)}
                />
            </FormGroup>
            <FormGroup row>
              <Label for="password">
                Password
              </Label>
              <Input 
                id="password" 
                name="password"
                placeholder=""
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
          
          </ModalBody>
          <ModalFooter>
            <Button color="success" type='submit'>Log in</Button>
            <Button color="danger" onClick={toggleLogin}>Cancel</Button>
            {/*  Cheatlogin for development   */}
            <div>
              <Button color="secondary" onClick={cheatLogin}>cheatLogin</Button>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
};

export default Login;
