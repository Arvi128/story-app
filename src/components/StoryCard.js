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
          This week on NL Hafta, Newslaundry’s Manisha Pande, Raman Kirpal,
          Mehraj D Lone, and Jayashree Arunachalam are joined by Vivek Kaul, an
          author and journalist.
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
