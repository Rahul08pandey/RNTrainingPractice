import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/Post';
import Profile from '../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator style={styles.tabNavigator}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="home" size={25} color="#000" />,
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          headerShown: false,
          tabBarIcon: () => 
            <FontAwesome name="plus-square" size={25} color="#000" />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="user" size={25} color="#000" />,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: '#F1F1F1',
  },
});

export default TabNavigator;
