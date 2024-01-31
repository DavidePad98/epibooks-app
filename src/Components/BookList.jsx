import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchValue: "",
  };
  render() {
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
          <h2 className="text-center">Cerca</h2>
          <Form.Control
            placeholder="Cerca qui il titolo del tuo libro"
            value={this.props.searchValue}
            onChange={(e) => {
              this.setState({ searchValue: e.target.value });
            }}
            className="my-3"
          />
          {this.props.jsonBooks
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase())
            )
            .map((book) => (
              <SingleBook book={book} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
