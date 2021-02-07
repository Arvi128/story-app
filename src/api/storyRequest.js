import URL from "./constants";

export function fetchStories() {
  fetch(URL.STORIES)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
