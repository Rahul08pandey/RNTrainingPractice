import React from 'react';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import DrawerNavigator from './DrawerNavigator';
import Details from '../screens/Forum/Details/Details';
import HaveQuestions from '../screens/Forum/HaveQuestions/HaveQuestions';
import AnsQues from '../screens/Forum/AnsQues/AnsQues';
import Slider from '../screens/Slider/Slider';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slider"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="HaveQuestions" component={HaveQuestions} />
      <Stack.Screen name="AnsQues" component={AnsQues} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
