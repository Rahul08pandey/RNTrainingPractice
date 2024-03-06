import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';

const Register = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState(false);

  const openLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    setShowAlert(true);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <CustomHeader height={246} />

      <View style={styles.registerContainer}>
        <Text
          style={{
            fontSize: 30,
            color: '#000000',
            marginBottom: 10,
            fontFamily: 'Nunito-SemiBold',
          }}>
          Become an Investor
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="black"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="black"
            style={styles.txtInput}
          />
        </View>
        <Text style={styles.txtInputHeading}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="black"
            style={styles.passwordTxtInput}
          />
          <Image source={IMAGES.eye} style={styles.eyeIcon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput
            placeholder="Enter Organization"
            placeholderTextColor="black"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>State</Text>
          <TextInput
            placeholder="Enter State"
            placeholderTextColor="black"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput
            placeholder="Enter City"
            placeholderTextColor="black"
            style={styles.txtInput}
          />
        </View>
        <CustomButton title="Register" onPress={handleRegister} />
        <TouchableOpacity style={styles.alreadyBtn} onPress={openLogin}>
          <Text style={styles.alreadyTxt}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      {showAlert && (
        <CustomAlert
          noTitle={title}
          btnTxt="Continue"
          message="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
          onClose={() => setShowAlert(false)}
        />
      )}
    </ScrollView>
  );
};

export default Register;
