import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SET_STATES} from './actionTypes';

export const userLogin = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const setStates = states => ({
  type: SET_STATES,
  payload: states,
});

export const logout = () => ({
  type: LOGOUT,
});
