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
import {DatePickerProps} from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
import {RadioButton} from 'react-native-paper';
import CheckBox from 'react-native-checkbox';
import React from 'react';
import {styles} from './rstyles';
import {useState} from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectCountry, setSelectCountry] = useState('');
  const [dob, setDob] = useState('');
  const [selectGender, setSelectGender] = useState('');
  //   const [error, setError] = useState(false);
  //   const [submitted, setSubmitted] = useState(false);

  const toggleCheckbox = () => setChecked(!check);

  const clickRegister = () => {
    // Alert.alert(`Email: ${email} \n Password:${password}`);
    Alert.alert('Please fill all the details!');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const countries = [
    {label: 'Afghanistan', value: 'Afghanistan'},
    {label: 'India', value: 'India'},
    {label: 'USA', value: 'USA'},
    {label: 'Canada', value: 'Canada'},
    {label: 'Sri Lanka', value: 'Sri Lanka'},
    {label: 'New Zealand', value: 'New Zealand'},
  ];

  const genderOptions = [
    {label: 'Select Gender', value: ''},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ];

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImg}
        source={require('../../../images/bg1.jpeg')}>
        <View style={styles.heading}>
          <Text style={styles.hText}> REGISTER </Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.input}>
            <View style={styles.name}>
              <TextInput
                value={name}
                placeholder={'Username'}
                onChangeText={text => setName(text)}
              />
            </View>

            <View style={styles.mail}>
              <TextInput
                value={email}
                placeholder={'Email'}
                onChangeText={text => setEmail(text)}
                autoCapitalize={'none'}
              />
            </View>
          </View>

          <View style={styles.country}>
            <Text style={{color: 'black', fontSize: 16}}>Select Country:</Text>
            <Dropdown
              style={{width: '60%', color: 'blue'}}
              data={countries}
              labelField="label"
              valueField="value"
              placeholder=" "
              iconColor="red"
            />
          </View>

          <View style={styles.radio}>
            <Text style={{color: 'black', fontSize: 18}}>Select Gender: </Text>
            <RadioButton
              value="first"
              status={selectGender === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setSelectGender('first')}
            />
            <Text style={{color: 'black', fontSize: 16}}> Male</Text>
            <RadioButton
              value="second"
              status={selectGender === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setSelectGender('second')}
            />
            <Text style={{color: 'black', fontSize: 16}}> Female</Text>
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
              <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"></TextInput>
              <TouchableOpacity onPress={togglePassword} style={styles.logo}>
                <Image source={require('../../../images/eye.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.confirmPswText}>
              <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Confirm Password"></TextInput>
              <TouchableOpacity onPress={togglePassword} style={styles.logo}>
                <Image source={require('../../../images/eye.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <CheckBox
              style={styles.checkbox}
              value={check}
              onValueChange={setCheck}
            />
            <Text style={{textAlign: 'center'}}>
              I agree to the terms of service for this page
            </Text>
          </View> */}
        </View>

        <View style={styles.register}>
          <Pressable style={styles.register1} onPress={clickRegister}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                justifyContent: 'center',
                color: 'black',
                padding: 10,
              }}>
              Register
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
