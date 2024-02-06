import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducer/authSlice'
import feedReducer from '../reducer/feedSlice';
import profileReducer from '../reducer/profileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    profile: profileReducer,
  },
});

export default store;
