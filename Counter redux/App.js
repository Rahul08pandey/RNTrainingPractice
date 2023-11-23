import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {Redux} from './src/screens/Redux/ReduxComponent';

const App = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default App;
