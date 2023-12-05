import {Provider} from 'react-redux';
import {store, persistor} from './src/store/userStore';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {React, useEffect} from 'react';
// import Assignment5 from './Assignment5';
// import Login from './src/screens/Login';
// import SignUp from './src/screens/SignUp';
// import Home from './src/screens/Home';
// import App from './Todo Redux/App';
import UserHobbies from './UserHobbies';
import UserHobbies1 from './UserHobbies1';
import UserHobbies2 from './UserHobbies2';
import UserData from './user_Data/UserData';

// import CameraScreen from './CameraScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <UserData />
    //  <UserHobbies />
    //  <UserHobbies1 />
    //  <UserHobbies2 />
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
