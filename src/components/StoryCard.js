import react from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function StoryCard({ story, onClickStory, isStoryLiked }) {
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
          <Col xs={6} sm={6} lg={12}>
            <div onClick={() => onClickStory(story.id)} className="like-btn">
              {isStoryLiked ? (
                <img
                  src="/assets/img/filled-heart.png"
                  alt="like"
                  className="heart-img"
                />
              ) : (
                <img
                  src="/assets/img/unfilled-heart.png"
                  alt="unlike"
                  className="heart-img"
                />
              )}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default StoryCard;
