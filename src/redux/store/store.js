import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import {persistStore} from 'redux-persist';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware({
    //     serializableCheck: false,
    //     immutableCheck: false,
    //   }),
  },
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
