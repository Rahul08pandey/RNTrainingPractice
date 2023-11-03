import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';

function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}


const Stack = createNativeStackNavigator();
export default function Assignment3() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Register'>
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}