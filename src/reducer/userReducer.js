import {LOGIN, SIGNUP, LOGOUT} from '../actions/actionTypes';

const initialState = {
  user: [],
  userLogin: {},
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
        user: [...state.user, action.payload],
      };

    case LOGOUT:
      return {
        ...state,
        userLogin: null,
      };

    default:
      return state;
  }
};

export default userReducer;
