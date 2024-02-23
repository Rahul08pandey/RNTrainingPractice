import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import store from './src /redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import AnimationAssignment from './AnimationAssignment';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    <AnimationAssignment />
    // </Provider>
  );
};

export default App;
