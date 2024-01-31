import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
  state = {
    condition: {
      selected: false,
    },
  };

  render() {
    return (
      <Col>
        <Card
          className="mt-3 w-100 h-100 border-0"
          onClick={() => {
            // this.state.condition.selected=== false ? this.setState({condition:{selected:true}}):this.state.condition.selected===true ? this.setState({condition:{selected:false}})
            this.setState({
              condition: { selected: true },
            });
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
