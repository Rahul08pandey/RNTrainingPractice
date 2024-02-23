import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import store from './src /redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './Navigation/RootNavigator';
import requestUserPermission from './Notification';
import getToken from './Notification';
import {handleDatabase} from './FireBaseDataBase/FirebaseDatabase';
import AnimationAssignment from './src/AnimationAssignment';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    getToken();
    requestUserPermission();
    handleDatabase();
  }, []);

  return (
    // <Provider store={store}>
    <RootNavigator />
    // <AnimationAssignment />
    // </Provider>
  );
};

export default App;
