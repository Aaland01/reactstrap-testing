import { Button, FormGroup, Input, Form, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback} from 'reactstrap'
import { useLogin } from './LoginContext';
import { useState } from 'react';


/**
   * The url for the API we are testing with
   * Might not work outside of the unit web computing
   */
export const API_URL = "http://4.237.58.241:3000"

const Login = () => {

  // Login context
  const {showLogin, toggleLogin} = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [invalidUsername, setInvalidUsername] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
          if(res.error){
            updateErrorfield(res.message, true);
            console.log(res)
            return;
          }
          //!WARNING this is not industry standard or safe
          // but a simplification. Better methods later
          localStorage.setItem("token", res.bearerToken.token)
          console.log(res)
        })
    )
    .catch(error => console.error(error));
  };

  const handleUsernameChange = (e) => {
    const { value: usernameInput } = e.target;
    if (checkLength(usernameInput)){
      updateErrorfield("Username cannot exceed 20 characters", true)
    }
    else if (checkRegex(usernameInput)) {
      updateErrorfield("Username cannot contain numbers or spaces", true)
    }
    else {
      clearErrorfield();
    }
    setUsername(usernameInput)
  }

  const checkLength = (username) => {
    return username.length >= 21;
  }

  const checkRegex = (username) => {
    let regex = /[0-9\s]/;
    return regex.test(username)
  }

  const updateErrorfield = (string, invalid) => {
    setErrorMessage(string);
    setInvalidUsername(invalid);
  } 

  const clearErrorfield = () => {
    setErrorMessage("");
    setInvalidUsername(false);
  }

  const handleSubmit = () => {
    e.preventDefault();
    if (!invalidUsername){
      login();  
    }
  }

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
        <Form onSubmit={e => handleSubmit(e)}>
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
                onChange={ e => {
                  handleUsernameChange(e)
                }}
                invalid={invalidUsername}
              />
            {
              (
                <FormFeedback>
                  {errorMessage}
                </FormFeedback>
              )
            }
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
                invalid={invalidUsername}
              />
            </FormGroup>
          
          </ModalBody>
          <ModalFooter>
            <Button color="success" type='submit' disabled={invalidUsername}>Log in</Button>
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
