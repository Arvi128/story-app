import react from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function StoryCard({ story, onClickStory, isStoryLiked, onClickHeart }) {
  return (
    <Card className="story-card" onClick={(e) => onClickStory(e, story.id)}>
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
          <Col align="right">
            <div onClick={() => onClickHeart(story.id)} className="like-btn">
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
