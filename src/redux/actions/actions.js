import {LOGIN_SUCCESS, LOGOUT, SET_STATES} from './actionTypes';

export const loginSuccess = credentials => ({
  type: LOGIN_SUCCESS,
  payload: credentials,
});

export const setStates = states => ({
  type: SET_STATES,
  payload: states,
});

export const logout = () => ({
  type: LOGOUT,
});
