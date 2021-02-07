import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { fetchStories } from "../api/storyRequest";
import StoryCard from "../components/StoryCard";
import response from "../response";
function Home(props) {
  const items = response.items.filter((item) => item.story);
  const [stories, setStories] = useState(items);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(function onLoad() {
    getStories();
  }, []);

  useEffect(
    function searchStories() {
      if (searchText.trim().length > 0) {
        const list = stories.filter((item) =>
          isMatchingString(item.story.headline)
        );
        setSearchResults(list);
      } else {
        setSearchResults(stories);
      }
    },
    [searchText]
  );

  async function getStories() {
    try {
      const response = await fetchStories();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  function isMatchingString(originText) {
    if (originText.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <Row>
        <Col lg={12} sm={12} xs={12}>
          <Form className="mt-4">
            <Form.Group controlId="formBasicEmail">
              <span className="page-title my-4">Top Stories</span>
              <Form.Control
                type="text"
                value={searchText}
                placeholder="Type story headline...."
                className="my-2"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Row className="mx-2">
          {searchResults.map((item, index) => (
            <Col xs={12} sm={12} md={6} lg={4} key={item.id} className="my-4">
              <StoryCard story={item.story} />
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default Home;
