import {createSlice} from '@reduxjs/toolkit';
import {signUp as apiSignUp, logIn as apiLogIn} from '../../Services/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    authenticateUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logoutUser: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {authenticateUser, logoutUser, setError} = authSlice.actions;

export const signUp =
  (firstName, lastName, email, password) => async dispatch => {
    try {
      const user = await apiSignUp(firstName, lastName, email, password);
      dispatch(authenticateUser(user));
    } catch (error) {
      dispatch(setError('Sign up failed. Please try again.'));
    }
  };

export const logIn = email => async dispatch => {
  try {
    const user = await apiLogIn(email);
    dispatch(authenticateUser(user));
  } catch (error) {
    dispatch(setError('Login failed. Please check your credentials.'));
  }
};

export default authSlice.reducer;