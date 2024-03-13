import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import {persistStore} from 'redux-persist';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //     immutableCheck: false,
  //   }),
});

// const persistor = persistStore(store);

// export {store, persistor};
export default store;
