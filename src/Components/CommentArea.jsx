import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleBook from "./SingleBook";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  readComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOGZhNDViMjYxNTAwMTk4YTY5MzEiLCJpYXQiOjE3MDY3OTA4MjAsImV4cCI6MTcwODAwMDQyMH0.fYFlw9pK82L37PnqUapOfqDBqs9q4EWfZMiz029nFaE",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((arrayComments) => {
        // console.log(arrayComments);
        this.setState({
          comments: arrayComments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.readComments();
  }
  render() {
    // console.log("render", this.state.comments);
    return (
      <ListGroup>
        {this.state.comments.map((booking) => {
          return (
            <ListGroup.Item key={booking._id}>{booking.comment}</ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentArea;
