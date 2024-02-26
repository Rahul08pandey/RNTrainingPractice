import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigation';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import {authenticateUser, setError} from '../redux/reducer/authSlice';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const isAuthenticated = true;
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          dispatch(authenticateUser(parsedUser));
        }
      } catch (error) {
        dispatch(setError('Error checking authentication.'));
      }
    };

    checkAuthentication();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'DrawerNavigator' : 'AuthNavigator'}
        screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          </>
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
