import 'react-native-gesture-handler';
/**
 * @format
 */
import { AppRegistry } from 'react-native';
// import Home from './src/screens/Home/Home';
import Register from './src/screens/Register/Register';
import { name as appName } from './app.json';


// import ToDoList from './ToDoList';
// import Login from './Login';
// import Navigation from './StackNavigation';
// import TestNavigation from './TestNavigation';


// AppRegistry.registerComponent(appName, () => ToDoList);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => StackNavigation);
// AppRegistry.registerComponent(appName, () => TestNavigation);
AppRegistry.registerComponent(appName, () => Register);

