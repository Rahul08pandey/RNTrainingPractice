import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Schedule from '../screens/Schedule/Schedule';
import Category from '../screens/Forum/Category/Category';
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Portfolio from '../screens/Portfolio/Portfolio';
import {Image, View} from 'react-native';
import IMAGES from '../assets/images';

const Tab = createBottomTabNavigator();

const TabNavigator = isFocused => {
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
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#0A4975',
                  borderRadius: 50,
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={IMAGES.calendarWhite} />
              </View>
            ) : (
              <Image source={IMAGES.calendarLarge} />
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#0A4975',
                  borderRadius: 50,
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={IMAGES.categoryWhite} />
              </View>
            ) : (
              <Image source={IMAGES.category} />
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#0A4975',
                  borderRadius: 50,
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={IMAGES.homeWhite} />
              </View>
            ) : (
              <Image source={IMAGES.home} />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#0A4975',
                  borderRadius: 50,
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={IMAGES.chatWhite} />
              </View>
            ) : (
              <Image source={IMAGES.chat} />
            ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#0A4975',
                  borderRadius: 50,
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={IMAGES.portfolioWhite} />
              </View>
            ) : (
              <Image source={IMAGES.portfolio} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
