import {Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';

const ChangePassword = ({navigation}) => {
  const handleUpdate = () => {
    console.log('hlo');
  };

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />
      <View style={styles.subContainer}>
        <Text style={styles.changePassTxt}>Change Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.passTxt}>Current Password</Text>
          <TextInput
            placeholder="Enter your current password"
            style={styles.txtInput}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            placeholder="Enter current password again"
            style={styles.txtInput}
          />
          <Text style={styles.passTxt}>New Password</Text>
          <TextInput placeholder="Enter new password" style={styles.txtInput} />
        </View>

        <CustomButton title="Update" onPress={handleUpdate} />
      </View>
    </View>
  );
};

export default ChangePassword;
