import {combineReducers} from 'redux';
import authReducer from './authReducer';
import forumSlice from './forumSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  forum: forumSlice,
});

export default rootReducer;
