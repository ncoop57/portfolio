import axios from "axios";

const GITHUB_URL = "https://api.github.com/users";
const GITHUB_USER_NAME = "ncoop57";

export const FETCH_PROJECTS = "FETCH_PROJECTS";

export function fetchProjects() {
  const request = axios.get(
    `${GITHUB_URL}/${GITHUB_USER_NAME}/repos?per_page=100`
  );

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}