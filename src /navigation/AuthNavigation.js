import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import UpdateProfile from '../screens/UpdateProfile';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Update Profile" component={UpdateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
