import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {store, persistor} from './src/store/userStore';
import {Provider} from 'react-redux';

const Assignment5 = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default Assignment5;
