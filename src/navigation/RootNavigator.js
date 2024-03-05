import React from 'react';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  // const isAuthenticated = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
