import {Provider} from 'react-redux';
import store from './src /redux/store/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src /navigation/RootNavigator';
// import SIGNIN from './SIGNIN';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <SIGNIN />
    <Provider store={store}>
    {/* <UpdateProfile/> */}
      <RootNavigator />
      {/* <Profile/> */}
      {/* <AuthNavigator /> */}
      {/* <Register/> */}
    </Provider>

    // <Comment/>
  );
};

export default App;
