import {LOGIN, SIGNUP, LOGOUT} from './actionTypes';

export const login = (email, password, name) => ({
  type: LOGIN,
  payload: {email, password, name},
});

export const signUp = (name, email, address, contact, password) => ({
  type: SIGNUP,
  payload: {name, email, address, contact, password},
});

export const logout = () => ({
  type: LOGOUT,
});

// export const rememberUser = () => ({
//   type: 'REMEMBER_USER',
// });
