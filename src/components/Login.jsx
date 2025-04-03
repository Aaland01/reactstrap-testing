import { Button, FormGroup, Input, Form, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import { useLogin } from './LoginContext';

/**
 * Opens a log in window
 * 
 * 
 */
const Login = () => {

  const {showLogin, toggleLogin} = useLogin();

  return (
    <>
      <Modal className='window login' isOpen={showLogin} toggle={toggleLogin}>
        <ModalHeader toggle={toggleLogin}>
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
          <Button color="danger" onClick={toggleLogin}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
};

export default Login;
