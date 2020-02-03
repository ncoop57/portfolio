import { combineReducers } from 'redux';
import PostReducer from './reducer_post';
import PostsReducer from './reducer_posts';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  projects: ProjectsReducer
});

export default rootReducer;