import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_STATES,
} from '../actions/actionTypes';

const initialState = {
  user: [],
  error: null,
  loading: false,
  isAuthenticated: false,
  states: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case SET_STATES:
      return {
        ...state,
        states: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
