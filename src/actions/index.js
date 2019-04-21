import axios from "axios";
// import Feed from "rss-to-json";

const GITHUB_URL = "https://api.github.com/users";
const GITHUB_USER_NAME = "ncoop57";

const MEDIUM_URL = "https://medium.com/@nathanallencooper/latest?format=json";
const MEDIUM_USER_NAME = "nathanallencooper";

export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_STORIES = "FETCH_STORIES";

export function fetchProjects() {
  const request = axios.get(
    `${GITHUB_URL}/${GITHUB_USER_NAME}/repos?per_page=100`
  );

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

// var Feed = require("rss-to-json");

// Feed.load("https://codek.tv/feed/", function(err, rss) {
//   console.log(rss);
// });

export function fetchStories() {
  // axios.defaults.baseURL = 'http://myurl';
  // axios.defaults.headers.post["Content-Type"] =
  //   "application/json;charset=utf-8";
  // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  const request = axios.get(MEDIUM_URL);

  // fetch(`${MEDIUM_URL}/@${MEDIUM_USER_NAME}/latest?format=json`).then(res =>
  //   console.log(res)
  // );

  // const request = Feed.load("https://medium.com/feed/@nathanallencooper");

  return {
    type: FETCH_STORIES,
    payload: request
  };
}
