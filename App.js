import {Provider} from 'react-redux';
import store from './src /redux/store/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src /navigation/RootNavigator';
import CameraNavigator from './CameraCode/navigation/CameraNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {/* <RootNavigator/> */}
      <CameraNavigator />
    </Provider>

    // <Comment/>
  );
};

export default App;
