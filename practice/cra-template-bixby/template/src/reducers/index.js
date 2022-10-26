import { combineReducers } from 'redux';
import userAuth from './userAuth-reducers';
import userProfile from './userProfile-reducers';
import comments from './comment-reducers';

export default combineReducers({
  userAuth,
  userProfile,
  comments,
});
