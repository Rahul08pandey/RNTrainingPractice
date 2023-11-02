import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import ToDoList from './ToDoList';
import Login from './Login';
import Navigation from './Navigation';
import TestNavigation from './TestNavigation';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => ToDoList);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Navigation);
AppRegistry.registerComponent(appName, () => TestNavigation);
