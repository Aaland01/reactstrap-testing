import { Link } from 'react-router-dom';
import {Button, Col, Container, Row} from 'reactstrap'
import Bookdata from './Bookdata';


const Home = () => {
  return (
    <>
        <Container className='cont'>
            <Row className='row mx-5' >
                <h1> Home </h1>
                <Col className='column1'>
                    <h4> Bojack Excerpt - Free churro </h4>
                    So I stopped at a Jack in the Box on the way here, and the girl behind the counter said, 
                    “Hiya! Are you having an awesome day?” Not, “How are you doing today?” No. 
                    “Are you having an awesome day?”. I usually say, “I am doing so great.” 
                    But when this girl at the Jack in the Box asked me if I was having an 
                    awesome day, I thought, “Well, no” 
                    <br/><br/>
                    She said“I'm sorry,” and I'm like, “It's fine” and she offers me a free churro with my meal. 
                    As I'm leaving, I think, “I just got a free churro because this is not the right quote.” 
                    No one ever tells you that when you quote incorrectly, you get a free churro. 
                    
                </Col>
                <Col className='col-auto mx-5 align-self-center text-center'>
                    <img 
                        className='image' 
                        src='ekkojinx.png'
                    />
                    <br/>
                    <Button 
                        className='mt-3' 
                        color='primary' 
                        tag={Link} to="/bookdata"
                    >
                        Bookdata
                    </Button>
                </Col>
            </Row>
        </Container>

    </>
  )
};

export default Home;
