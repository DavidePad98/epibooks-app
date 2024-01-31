import SingleBook from "./SingleBook";
import Horror from "../data/books/horror.json";
import { Container, Row } from "react-bootstrap";

const BookList = () => {
  return (
    <Container>
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={5}
        xxl={6}
        className="justify-content-center g-4"
      >
        {Horror.map((book) => {
          return <SingleBook book={book} />;
        })}
        ;
      </Row>
    </Container>
  );
};

export default BookList;
