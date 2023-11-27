import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import CameraScreen from './CameraScreen';
// import Login from './src/screens/Login';
// import SignUp from './src/screens/SignUp';
// import Home from './src/screens/Home';
import App from './App';

// AppRegistry.registerComponent(appName, () => CameraScreen);
AppRegistry.registerComponent(appName, () => App);
