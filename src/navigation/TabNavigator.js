import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Schedule from '../screens/Schedule/Schedule';
import Category from '../screens/Forum/Category/Category';
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Portfolio from '../screens/Portfolio/Portfolio';
import {Image} from 'react-native';
import IMAGES from '../assets/images';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: () => <Image source={IMAGES.calendarLarge} />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: () => <Image source={IMAGES.category} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Image source={IMAGES.home} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => <Image source={IMAGES.chat} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: () => <Image source={IMAGES.portfolio} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
