import axios from "axios";
import Parser from 'rss-parser/dist/rss-parser.min.js'
let parser = new Parser();

const GITHUB_URL = "https://api.github.com";
const GITHUB_USER_NAME = "ncoop57";
const GITHUB_REPO_NAME = "ncoop57.github.io";

const YOUTUBE_API_KEY = "AIzaSyCQVf8dwuvV1av8d9-9D43f6rLEflAIUCs"
const YOUTUBE_CHANNEL = "UCKfOCnojK5YV7_hdPjAtY7Q"
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL}&part=snippet,id&order=date&maxResults=20`;

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_VIDEOS = "FETCH_VIDEOS";

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
    // YOUTUBE_URL
    `${GITHUB_URL}/users/${GITHUB_USER_NAME}/repos?per_page=100`
  );
  console.log(request)
  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

export function fetchVideos() {
  const request = axios.get(
    YOUTUBE_URL
    // "https://www."
  );
  console.log("Fetching videos")
  console.log(request)
  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}

