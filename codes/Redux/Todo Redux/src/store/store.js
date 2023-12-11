import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['reducers'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistedReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export {store, persistor};
