import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TuttiILibri from "../data/books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        lg={3}
        xl={4}
        xxl={5}
        className="justify-content-center g-4"
      >
        {TuttiILibri.map((book) => {
          return (
            <Col>
              <Card className="mt-3 w-100 h-100 border-0">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>Id: {book.asin}</Card.Text>
                  <Button variant="success">{book.price}$</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
