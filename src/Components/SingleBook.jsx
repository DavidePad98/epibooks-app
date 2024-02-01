import { Component } from "react";
// import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    condition: {
      selected: false,
    },
    comments: [],
  };

  render() {
    return (
      <Col key={this.props.book.asin}>
        <Card
          className={
            this.state.selected
              ? "mt-3 w-100 h-100 border-5 border-danger "
              : "mt-3 w-100 h-100 border-0"
          }
          onClick={() => {
            // this.setState({ selected: this.state.selected ? false : true });
            this.setState({
              selected: !this.state.selected,
            });
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            {/* <CommentArea /> */}
            {this.state.condition.selected && (
              <CommentArea asin={this.props.book.asin} />
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
