import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ToDoList from './ToDoList';
import Login from './Login';

// STACK NAVIGATION :-
function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'orange',
      }}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        Welcome to Home Screen....
      </Text>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Button
        color={'orange'}
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  //navigation declare always when we navigate from one page to another
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
        Welcome to Details Screen....
      </Text>
      <Text>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
      <Button
        color="orange"
        title="Go to Details Screen1"
        onPress={() => navigation.navigate('Details1')}
      />
      <Button
        color="green"
        title="Go to Details Screen again with push"
        onPress={() => navigation.push('Details')} // push - go from one page to another...
      />
      <Button
        title="Go to Home Screen with navigate"
        onPress={() => navigation.navigate('Home')} //go back to main screen...
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack('Home')} //goBack - to go back 1 page...
      />
      <Button
        title="Go back to Home Screen with popToTop"
        onPress={() => navigation.popToTop('Home')} //popToTop - go to main screen...
      />
      <Button
        title="Update Title"
        onPress={() =>
          navigation.setOptions({
            title: 'Updated Detail Title',
          })
        }
      />
    </View>
  );
}

function DetailsScreen1({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        // justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Welcome to Details Screen 1....
      </Text>
      <Text style={{fontSize: 20, color: 'red'}}>Hello Rahul</Text>
      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.popToTop('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator(); // make a function and store in a variable...

function TestNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"

        // customization of header for navigation for all pages by screenOptions :-

        //   screenOptions={{
        //   headerShown: false,                         // hide the top bar for all screens work by screenOptions...
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        //   headerTintColor: 'white',
        //     headerTitleStyle: 'bold',
        //   headerTitleAlign: 'center',
        // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // customization for navigation for single pages by options :-
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: 'grey', // for background color in header
            },
            headerTintColor: 'blue', // for text color in header
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details Screen',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="Details1"
          component={DetailsScreen1}
          options={{
            title: 'Details Screen',
            headerStyle: {
              backgroundColor: 'indigo',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TestNavigation;
