import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
  // registered: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        // error: null,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
    // return {
    //   ...state,
    //   user: null,
    //   error: action.payload,
    //   isAuthenticated: false,
    // };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        // loading: false,
        error: null,
        registered: true,
      };

    case REGISTER_FAILURE:
    // return {
    //   ...state,
    //   loading: false,
    //   registered: false,
    //   error: action.payload,
    // };

    default:
      return state;
  }
};

export default authReducer;
