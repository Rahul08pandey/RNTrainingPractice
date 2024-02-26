import {Provider} from 'react-redux';
import store from './src /redux/store/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src /navigation/RootNavigator';
import requestUserPermission from './Notification';
import {handleDatabase} from './FirebaseDB';
requestUserPermission();
handleDatabase();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
