import { Link } from "react-router-dom";
import { Button, Card, Container } from "reactstrap";
import { useSearchParams } from "react-router-dom";

const Book = () => {

  const [params] = useSearchParams();
  const book = {title: params.get("title"), author: params.get("author")};
  
  return (
    <>
      <Button className="ms-5 mb-3" size="sm" color="info" tag={Link} to="/bookdata">
        &lt; Back
      </Button>

      <Container>
        <Card className="p-3">
          <h2>{book.title}</h2>
          <h4 className="ps-2">By {book.author}</h4>
          <p className="mt-4">Synopsis</p>
        </Card>
      </Container>
    </>
  )
};

export default Book;
