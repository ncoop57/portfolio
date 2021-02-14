import _ from "lodash";
import { FETCH_VIDEOS } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      // return _.mapKeys(action.payload.data.items, "id");
      // console.log(action.payload.data.items)
      // return _.mapKeys(action.payload.data, "id");
      return action.payload.data;
    default:
      return state;
  }
}
