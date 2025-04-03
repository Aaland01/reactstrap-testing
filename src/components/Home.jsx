import {Col, Container, Row} from 'reactstrap'


const Home = () => {
  return (
    <>
        <Container className='cont'>
            <Row className='row mx-5' >
                <h1> Home </h1>
                <Col className='column1'>
                    <h4> Animal Well </h4>
                    Explore a dense, interconnected labyrinth, and unravel its many secrets. 
                    Collect items to manipulate your environment in surprising and meaningful ways. 
                    Encounter beautiful and unsettling creatures, as you attempt to survive what lurks 
                    in the dark. There is more than what you see.
                </Col>
                <Col className='col-auto mx-5'>
                    <img className='image' src='BlueLogo.png'/>
                </Col>
            </Row>
        </Container>

    </>
  )
};

export default Home;
