import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  PERSIST_USER_DATA,
  POST_DATA,
  FETCH_COMMENTS,
} from './types';

const BASE_URL = 'https://dummyapi.io/data/v1/';
const API_KEY = '65b9f249af8a80c525603fda';

export const registerUser = (firstName, lastName, email) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/register`,
        {
          firstName,
          lastName,
          email,
        },
        {
          headers: {
            'app-id': API_KEY,
          },
        },
      );

      // Dispatch the REGISTER_USER action with the registered user's data
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });

      // Persist user data after registration
      dispatch(persistUserData(response.data));
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('User with the provided email already exists.');
      } else {
        console.error('Error registering user:', error);
      }
    }
  };
};

// export const loginUser = (email, password, rememberMe) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/user/login`, {
//         email,
//         password,
//       });

//       // Dispatch the LOGIN_USER action with the logged-in user's data
//       dispatch({
//         type: LOGIN_USER,
//         payload: response.data,
//       });

//       // Persist user data after login if rememberMe is true
//       if (rememberMe) {
//         dispatch(persistUserData(response.data));
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       throw error; // Propagate the error to the calling code if needed.
//     }
//   };
// };

export const loginUser = email => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}user/login`,
        {
          email,
        },
        {
          headers: {
            'app-id': API_KEY,
          },
        },
      );

      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
};

export const persistUserData = userData => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Dispatch the PERSIST_USER_DATA action with the persisted user data
      dispatch({
        type: PERSIST_USER_DATA,
        payload: userData,
      });
    } catch (error) {
      console.error('Error persisting user data:', error);
    }
  };
};

export const postData = image => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('image', {
        image,
        Owner: '65b3f1d8ed8ee72d3c09c9d7',
      });

      // Include the comment text in the FormData
      formData.append();
      formData.append('comment', commentText);

      const response = await axios.post(`${BASE_URL}post/create`, formData, {
        headers: {
          'app-id': API_KEY,
          'Content-Type': 'Header',
        },
      });
      console.log('Post Response:', response);

      dispatch({
        type: POST_DATA,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error posting image:', error);
      throw error;
    }
  };
};

// New action to post comments
export const postComment = (postId, commentText) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}post/${postId}/comment/create`,
        {
          comment: commentText,
        },
        {
          headers: {
            'app-id': API_KEY,
          },
        },
      );

      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  };

  // export const setUserData = (userData) => ({
  //   type: PERSIST_USER_DATA,
  //   payload: userData,
  // });
};
