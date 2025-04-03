import { Col, Row, Container } from "reactstrap";

const About = () => {
  return (
    <>
      
      <Row className="px-5">
        <h1 className="text-center"> About the logo </h1>
        <Col className="col-3">
            <img className="image float-end" src="/BlueLogo.png"/>
        </Col>

        <Col className="">
            <Container >
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sed felis tincidunt, semper turpis facilisis, vehicula augue. Curabitur ac quam nulla. 
                    Praesent elementum at nisi imperdiet sagittis. Pellentesque purus eros, 
                    gravida sit amet interdum eu, feugiat tempor libero. Maecenas eget quam ipsum. 
                    Fusce augue metus, faucibus in pharetra eu, vestibulum sed magna. 
                    Aliquam pellentesque, odio et tincidunt gravida, metus lectus aliquet mauris, 
                    id sollicitudin tortor mauris eget lacus. Nulla placerat arcu vel tristique lobortis.
                </div>
            </Container>
        </Col>
      </Row>
    </>
  )
};

export default About;
