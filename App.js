import {Provider} from 'react-redux';
import {store, persistor} from './codes/src/store/userStore';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {React, useEffect} from 'react';
import PharmacyData from './src/Pharmacy Data';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    <PharmacyData />
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
