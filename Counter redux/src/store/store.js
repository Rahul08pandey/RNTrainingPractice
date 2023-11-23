import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
// import * as reducers from '../reducers/';

// const reducer = combineReducers(reducers);
const store = createStore(counterReducer)
// const store = configureStore({
//     reducer: reducer,
// });
export default store;