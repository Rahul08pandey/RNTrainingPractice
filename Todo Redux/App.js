import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import Todo from './src/components/Todo';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  );
};

export default App;
