const PROXY_URL =
  window.location.hostname === "localhost"
    ? "https://cors-anywhere.herokuapp.com"
    : "/cors-proxy";
const SITE_URL = `${PROXY_URL}/https://ace.qtstage.io/api/v1`;
const DEPLOYMENT_URL = "https://laughing-shockley-5cdb76.netlify.app/";

const URL = {
  STORIES: `${SITE_URL}/collections/entertainment`,
  DEPLOYMENT_URL: DEPLOYMENT_URL,
};

export default URL;
