import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';

function Home() {
  return (
      <View style={{
          flex: 1,
          padding: 10,
      }}>
      <Text style={{
          color: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        This is the Home Page.
      </Text>
    </View>
  );
}

function Details() {
  return (
      <View style={{
          flex: 1,
          padding: 10,
    }}> 
      <Text style={{
          color: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        This is the details page.
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Details' component={Details}/>
       </Drawer.Navigator>
   )
}


export default App = () => {
    return (
      <NavigationContainer>
        </NavigationContainer>
    )
}
