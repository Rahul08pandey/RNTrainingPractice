import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Home from './Home';
import Header from './Header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Register">
        <Stack.Screen name="Register" component={Register}options={{
            header: () =><Header title="Register"/>,}}/>
        <Stack.Screen name="Home" component={Home} options={{ 
          header:() => <Header title= "Home"/>,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
