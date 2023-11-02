import {View, Text} from 'react-native';
import React from 'react';
import ToDoList from './ToDoList';
import Login from './Login';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// functi
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} option={{}} />
      </Stack.Navigator>
      {/* <ToDoList/>        //call by function+ */}
      {/* <Login />         //call by function */}
    </NavigationContainer>
  );
}
