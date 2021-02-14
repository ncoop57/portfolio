import { combineReducers } from 'redux';
import PostReducer from './reducer_post';
import PostsReducer from './reducer_posts';
import ProjectsReducer from './reducer_projects';
import VideosReducer from './reducer_videos';

const rootReducer = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  projects: ProjectsReducer,
  videos: VideosReducer
});

export default rootReducer;