// import React, {useEffect} from 'react';
// import {Provider} from 'react-redux';
// import store from './src /redux/store/store';
// import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/Login/Login';
import StackNavigator from './src/navigation/AuthNavigator';
import Register from './src/screens/Register/Register';
import ForgotPasswordEmail from './src/screens/ForgotPassword/ForgotPassword';
import RootNavigator from './src/navigation/RootNavigator';
import AnsQues from './src/screens/Forum/AnsQues/AnsQues';
import HaveQuestions from './src/screens/Forum/HaveQuestions/HaveQuestions';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import Schedule from './src/screens/Schedule/Schedule';

// import {handleDatabase} from './FirebaseDatabase';
// handleDatabase();

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    // <Provider store={store}>
    // <Header />
    // <Schedule />
    // <TabNavigator />
    <RootNavigator />
    // <DrawerNavigator />
    // <AnsQues />
    // <ForgotPassword />
    // <HaveQuestions />
    // </Provider>
  );
};

export default App;
