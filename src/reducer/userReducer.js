import {LOGIN, SIGNUP, LOGOUT} from '../actions/actionTypes';

const initialState = {
  users: [],
  userLogin: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        users: state.users,
        userLogin: action.payload,
      };

    case SIGNUP:
      return {
        users: [...state.users, action.payload],
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
