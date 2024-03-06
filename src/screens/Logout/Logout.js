import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import {useNavigation} from '@react-navigation/native';

const Logout = () => {
  const [doubleButton, setDoubleButton] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  const handleLogout = () => {
    setIsVisible(false);
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    setIsVisible(true);
    console.log('first');
    navigation.navigate('MyProfile');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomAlert
        title="Logout"
        message="Are you sure you want to Logout?"
        btnTxt="Logout"
        visible={isVisible}
        dButton={doubleButton}
        onPress={handleLogout}
        cancelPress={handleCancel}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
