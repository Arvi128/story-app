import react from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function StoryCard({ story }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://th.bing.com/th/id/OIP.y34ztBkUddWTcezvTXOKXwHaEK?pid=Api&rs=1"
      />
      <Card.Body>
        <Card.Title>{story.headline}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <Row>
          <Col xs={6} sm={6} lg={12} className="like-btn">
            <div className="d-flex flex-row align-items-center justify-content-start"></div>
          </Col>
          <Col xs={6} sm={6} lg={12} className="like-btn">
            <img src="/assets/img/heart.png" alt="like" className="heart-img" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default StoryCard;
