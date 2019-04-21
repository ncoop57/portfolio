import _ from "lodash";
import { FETCH_PROJECTS, FETCH_STORIES } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_STORIES:
      console.log(action.payload.data);
      return state;
    // return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
