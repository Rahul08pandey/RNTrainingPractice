import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Referrals from '../screens/Referrals/Referrals';
import Logout from '../screens/Logout/Logout';
import CustomDrawerContent from '../components/common/CustomDrawer';
import TabNavigator from './TabNavigator';
import MyProfile from '../screens/Profile/MyProfile';
import {TouchableOpacity, Text} from 'react-native';
import ChangePassword from '../screens/ChangePassword/ChangePassword';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <CustomDrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="Referrals" component={Referrals} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
