import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/userStore';
import {PersistGate} from 'redux-persist/integration/react';
import Assignment5 from './Assignment5';
// import Login from './src/screens/Login';
// import SignUp from './src/screens/SignUp';
// import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Assignment5 />
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Home /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
