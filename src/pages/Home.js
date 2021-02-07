import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { fetchStories } from "../api/storyRequest";
import StoryCard from "../components/StoryCard";

function Home(props) {
  const [showLoading, setShowLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [listOfLikes, setListOfLikes] = useState([]);

  useEffect(function onLoad() {
    setShowLoading(true);
    try {
      fetchStories().then((response) => {
        if (Array.isArray(response.items)) {
          const list = filterStories(response.items);
          setShowLoading(false);
          setStories(list);
          setSearchResults(list);
        }
      });
    } catch (e) {
      setShowLoading(false);
      console.log(e);
    }
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

  useEffect(
    function loadLikeHistory() {
      const likeHistory = getLikeHistory();
      if (likeHistory) {
        const list = JSON.parse(likeHistory).listOfLikes;
        setListOfLikes(list);
      }
    },
    [stories]
  );

  /**
   * @param {array} list
   * filter objects with a story key
   * returns array
   */
  function filterStories(list) {
    return list.filter((item) => item.story);
  }
  /**
   *
   * @param {string} originText
   * search function
   * returns boolean
   */
  function isMatchingString(originText) {
    if (originText.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }

  function getLikeHistory() {
    return localStorage.getItem("likeHistory");
  }

  /**
   *
   * @param {string} storyId
   * handles like/unlike story actions
   */
  function markStoryAsFavoriteHandler(storyId) {
    try {
      const currentListOfLikes = [...listOfLikes];
      if (currentListOfLikes.length > 0) {
        const index = currentListOfLikes.findIndex((item) => item === storyId);
        if (index > -1) {
          currentListOfLikes.splice(index, 1);
        } else {
          currentListOfLikes.push(storyId);
        }
      } else {
        currentListOfLikes.push(storyId);
      }
      setListOfLikes(currentListOfLikes);
      localStorage.setItem(
        "likeHistory",
        JSON.stringify({ listOfLikes: currentListOfLikes })
      );
    } catch (e) {
      console.log(e);
    }
  }
  function isStoryLiked(storyId) {
    return listOfLikes.includes(storyId);
  }

  /**
   * @param {any} event
   * @param {string} storyId
   * double click/tap to like
   */
  function onDoubleClickStory(event, storyId) {
    if (event.detail === 2) {
      markStoryAsFavoriteHandler(storyId);
    }
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
          {showLoading && <div className="pl-2">Loading Stories ...</div>}
          {searchResults.map((item, index) => (
            <Col xs={12} sm={12} md={6} lg={4} key={item.id} className="my-4">
              <StoryCard
                story={item.story}
                isStoryLiked={isStoryLiked(item.story.id)}
                onClickHeart={markStoryAsFavoriteHandler}
                onClickStory={onDoubleClickStory}
              />
            </Col>
          ))}
          {!showLoading && searchResults.length === 0 && (
            <div className="pl-2">No stories found !</div>
          )}
        </Row>
      </Row>
    </Container>
  );
}

export default Home;
