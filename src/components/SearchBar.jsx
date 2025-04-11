import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [dummydata, setDummydata] = useState({})


  // Needs authorization
  const getDummydata = () => {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    }).then((res) => 
      res.json()
        .then((res) => {
          console.log(res);
          setPerson({name: res.name, year: res.birthYear})
        })
    )
    .catch( error => console.error(error))
}
  
  return (
    <>
      <Container>
        <Row className="mx-md-5 align-items-center justify-content-center">
          <Col className="col-2 text-start text-md-end">
            <h5 className="me-2 me-md-0"> Search: </h5>
          </Col>
          <Col className="d-block d-sm-none col-6"></Col>
          <Col className="d-block w-full d-sm-none col-12"></Col>
          <Col className="col-7">
            <input className="w-100 p-2 bg-accent rounded-pill" type="search" name="name" id="name" 
              aria-labelledby="search-button"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </Col>
          <Col className="col-2">
            <Button id="search-button" color="primary" type="button">Search</Button>
          </Col>
        </Row>
        <div className={`text-center d-${search ? "block" : "none"} `}>
          <p>Search for: 
            <span className="fw-bold ms-2">
              {search}
            </span>
          </p>
        </div>
      </Container>

    </>
  )
};

export default SearchBar;
