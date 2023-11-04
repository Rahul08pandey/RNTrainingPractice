import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState(null);

  //email validation -
  const validateEmail = (email) => {
    const emailVal = /^[^\s@]+@[^\s@]+\[^\s@]+$/;
    return emailVal.test(email);
  };

  //password validation -
  const validatePassword = (password) => {
    const passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordVal.test(password);
  };

  //Register validation -
  const validateRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
    } else if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.'
      );
    } else {
      Alert.alert('Success', ' User Register successful!');
    }
  };

  // const togglePassword = () => {
  //   setConfirmPassword(!confirmPassword);
  // };

  const countries = [
    { label: 'Afghanistan', value: 'Afghanistan' },
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Sri Lanka', value: 'Sri Lanka' },
    { label: 'New Zealand', value: 'New Zealand' },
  ];

  const genderOptions = [
    { label: 'Select Gender', value: '' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    // {label: 'Other', value: 'Other'},
  ];


 navigation.navigate('NextPage', {
           userName: name,
        userEmail: email,
        userCountry: country,
        userGender: gender,
      userPassword: password,
      userConfirmPassword: confirmPassword,
});


  return (
    <View style={styles.mainContainer}>
      <View style={styles.heading}>
        <Text style={styles.hText}> REGISTER </Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.input}>
          <View style={styles.name}>
            <TextInput
              value={name}
              placeholder={'Username'}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.mail}>
            <TextInput
              value={email}
              placeholder={'Email'}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
            />
          </View>
        </View>

        <View style={styles.country}>
          <Text style={{ color: 'black', fontSize: 16 }}>Select Country:</Text>
        </View>

        <View style={styles.radio}>
          <Text style={{ color: 'black', fontSize: 18 }}>Select Gender: </Text>
          <RadioButton
            value="first"
            status={gender === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setGender('first')}
          />
          <Text style={{ color: 'black', fontSize: 16 }}> Male</Text>
          <RadioButton
            value="second"
            status={gender === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setGender('second')}
          />
          <Text style={{ color: 'black', fontSize: 16 }}> Female</Text>
        </View>
        {/* <View style={styles.dob}>
            <Text style={{width: '100%'}}>Select DOB: </Text>
            <DatePicker
              style={{}}
              date={dob}
              mode="date"
              placeholder="Select DOB"
              format="YYYY-MM-DD"
              confirmText="Confirm"
              cancelText="Cancel"
              onDateChange={date => setDob(date)}
            />
          </View> */}

        <View style={styles.psw}>
          <View style={styles.pswText}>
            <TextInput             secureTextEntry={!password}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"></TextInput>
          </View>

          <View style={styles.confirmPswText}>
            <TextInput
              secureTextEntry={!confirmPassword}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Confirm Password"></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.register}>
        <Pressable style={{
          flex:1,
         width: '100%', 
         }} onPress={validateRegister}>
          <Text
            style={{
               flex: 1,
  width: '100%',
              fontSize: 18,
color:'black',              padding: 10,
backgroundColor: 'green',
borderRadius: 50,
            }}>
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // bgImg: {
  //   flex: 1,
  //   width: '100%',
  // },

  heading: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },

  hText: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subContainer: {
    flex: 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  input: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'brown',
  },

  name: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingLeft: 5,
  },

  mail: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingLeft: 5,
  },

  country: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    // backgroundColor: 'yellow',
  },

  radio: {
    flex: 0.1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  //   dob: {
  //     flex: 0.1,
  //     backgroundColor: 'grey',
  //   },

  psw: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'black',
  },

  pswText: {
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#d3d3d3',
    paddingLeft: 5,
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  confirmPswText: {
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    paddingLeft: 5,
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  logo: {
    top: 10,
    paddingRight: '5%',
  },

  checkbox: {
    alignSelf: 'center',
  },

  register: {
    flex: 0.1,
    width: '30%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
