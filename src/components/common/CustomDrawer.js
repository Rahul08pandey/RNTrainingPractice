import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import IMAGES from '../../assets/images/index';
import {moderateScale} from '../../utils/Metrics';

const drawerItems = [
  {name: 'MyProfile', icon: IMAGES.person, label: 'Profile'},
  {name: 'Referrals', icon: IMAGES.referral, label: 'Referral'},
  {name: 'ChangePassword', icon: IMAGES.referral, label: 'Change Password'},
  {name: 'Logout', icon: IMAGES.logout, label: 'Logout'},
];

const CustomDrawerContent = ({navigation}) => {
  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.drawerHeader}>
            <Image source={IMAGES.can} resizeMode="cover" style={styles.img} />
          </View>
          <TouchableHighlight
            onPress={handleCloseDrawer}
            underlayColor="green"
            style={{
              top: 10,
              right: 10,
              position: 'absolute',
            }}>
            <Image source={IMAGES.cross} />
          </TouchableHighlight>
        </View>

        <View style={styles.drawerContent}>
          {drawerItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.drawerItem}
              onPress={() => navigation.navigate(item.name)}>
              <View style={styles.imgContainer}>
                <Image source={item.icon} style={{height: 20, width: 20}} />
                <Text style={styles.drawerItemText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
  },

  drawerHeader: {
    marginTop: -moderateScale(5),
    height: moderateScale(100),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10, 73, 117, 1)',
  },

  img: {
    height: moderateScale(83),
    width: moderateScale(197),
    alignSelf: 'center',
  },

  drawerContent: {
    margin: moderateScale(10),
  },

  drawerItem: {
    width: '100%',
    height: moderateScale(40),
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
  },

  imgContainer: {
    flexDirection: 'row',
  },

  drawerItemText: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: moderateScale(10),
  },
});

export default CustomDrawerContent;
