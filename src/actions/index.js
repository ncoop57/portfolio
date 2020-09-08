import axios from "axios";
import Parser from 'rss-parser/dist/rss-parser.min.js'
let parser = new Parser();

const GITHUB_URL = "https://api.github.com";
const GITHUB_USER_NAME = "ncoop57";
const GITHUB_REPO_NAME = "ncoop57.github.io";

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";

export function fetchPost(id) {
  const request = axios.get(
    `${GITHUB_URL}/repos/${GITHUB_USER_NAME}/${GITHUB_REPO_NAME}/contents/posts/${id}`
  );

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchPosts() {
  const request = parser.parseURL(
    `https://nathancooper.io/i-am-a-nerd/feed.xml`
  );

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchProjects() {
  const request = axios.get(
    `${GITHUB_URL}/users/${GITHUB_USER_NAME}/repos?per_page=100`
  );

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

