import {View, Text, Button} from 'react-native';
import React from 'react';
import ToDoList from './ToDoList';
import Login from './Login';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'blue',
          fontSize: 30,
        }}>
        This is Home Page....
      </Text>
      <Button
        title="go to details page"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
          color: 'red',
          fontSize: 25,
        }}>
        This is details page...
      </Text>
      <Button title="go to back"
        onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} option={{}} />
      </Stack.Navigator>
      {/* <ToDoList/>        //call by function+ */}
      {/* <Login />         //call by function */}
    </NavigationContainer>
  );
}
