import {LOGIN, SIGNUP, LOGOUT, REMEMBER_USER} from '../actions/actionTypes';

const initialState = {
  user: [],
  userLogin: {},
  // registrationError: null,
  rememberMe: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: state.user,
        userLogin: action.payload,
      };

    case SIGNUP:
      return {
        ...state,
        user: [...state.user, action.payload],
        // registrationError: null,
      };

    case LOGOUT:
      return {
        ...state,
        userLogin: null,
      };

    // case REMEMBER_USER:
    //   return {
    //     ...state,
    //     rememberMe: !state.rememberMe,
    //   };

    default:
      return state;
  }
};

export default userReducer;
