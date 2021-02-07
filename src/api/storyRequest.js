import URL from "./constants";

export function fetchStories() {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Origin", URL.DEPLOYMENT_URL);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(URL.STORIES, requestOptions)
      .then((response) => response.text())
      .then((result) => resolve(JSON.parse(result)))
      .catch((error) => reject(error));
  });
}
