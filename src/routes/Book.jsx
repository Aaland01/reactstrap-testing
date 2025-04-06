import { Link } from "react-router-dom";
import { Badge, Button, Card, Col, Container, Row } from "reactstrap";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Book = () => {
  const [params] = useSearchParams();
  const loadingTitle = {title: "Loading works..."}
  const [isLoading, setLoading] = useState(true)

  const book = {
    title: params.get("title"), 
    author: {
      name: params.get("author"),
      id: params.get("authorID")
    }
  }

  const [otherWorks, setOtherWorks] = useState([loadingTitle])
  

  const authorWorksURL = `https://openlibrary.org/authors/${book.author.id}/works.json?limit=15`

  useEffect( () => {
    fetch(authorWorksURL)
    .then(res => res.json())
    .then(json => json.entries)
    .then(entries => 
      entries.map( (entry) => {
        return {
          title: entry.title,
        }
      })
    )
    .then(works => {
      setOtherWorks(works)
      setLoading(false)
  })
    }, []
  );
  
  return (
    <>
      <Button className="ms-5 mb-3" size="sm" color="info" tag={Link} to="/bookdata">
        &lt; Back
      </Button>

      <Container>
        <Card className="p-3">
          <h2>{book.title}</h2>
          <h4 className="ps-2">By {book.author.name}</h4>
          <p className="mt-4">Synopsis</p>
        </Card>
        <Card className="my-5">
          <h5 className="mb-3">Other works</h5>
          <Row>
            {otherWorks.map(otherbook => (
              <Col key={otherbook.title} className="col-4 mb-2">
                {otherbook.title}
                <Badge 
                  tag={Link}
                  className="ms-3"
                  to={`/book?title=${otherbook.title}&author=${book.author.name}&authorID=${book.author.id}`}
                  color="info"
                >
                  Link
                </Badge>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </>
  )
};

export default Book;
