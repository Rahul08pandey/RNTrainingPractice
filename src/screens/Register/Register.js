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
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {styles} from './rstyles';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [country, setCountry] = useState(false);
  const [gender, setGender] = useState(null);

  // //Register validation -
  const submitHandler = () => {
    if (!name.trim()) {
      Alert.alert('Please enter name');
    } else if (!email) {
      Alert.alert('Please enter email');
    } else if (password.length < 6) {
      Alert.alert('Your Password must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else if (submitHandler) {
      navigation.navigate('Home', {
        name,
        email,
        country,
        gender,
        password,
      });
    } else {
      Alert.alert('Registered Successfully!');
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  return (
    <ImageBackground
      source={require('../../../images/bg1.jpeg')}
      resizeMode="cover"
      style={styles.bgImg}>
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
                onChangeText={text => setName(text)}
              />
            </View>

            <View style={styles.mail}>
              <TextInput
                value={email}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                // autoCapitalize={'none'}
              />
            </View>
          </View>

          <View style={styles.country}>
            <Text style={{color: 'black', fontSize: 16}}>Select Country:</Text>
            <Dropdown
              style={styles.countries}
              data={countries}
              labelField="label"
              valueField="value"
              onChange={item => {
                setCountry(item.value);
              }}></Dropdown>
          </View>

          <View style={styles.radio}>
            <Text style={{color: 'black', fontSize: 18}}>Select Gender: </Text>
            <RadioButton
              value="Male"
              status={gender === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Male')}
            />
            <Text style={{color: 'black', fontSize: 16}}> Male</Text>
            <RadioButton
              value="Female"
              status={gender === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Female')}
            />
            <Text style={{color: 'black', fontSize: 16}}> Female</Text>
          </View>

          <View style={styles.psw}>
            <View style={styles.pswText}>
              <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"></TextInput>
              <TouchableOpacity onPress={togglePassword} style={styles.img}>
                <Image
                  source={
                    showPassword
                      ? require('../../../images/eye.png')
                      : require('../../../images/eye.png')
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.confirmPswText}>
              <TextInput
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                placeholder="Confirm Password"></TextInput>
              <TouchableOpacity
                onPress={toggleConfirmPassword}
                style={styles.img}>
                <Image
                  source={
                    showConfirmPassword
                      ? require('../../../images/eye.png')
                      : require('../../../images/eye.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.register}>
          <Pressable
            style={{
              borderRadius: 50,
              backgroundColor: 'green',
              paddingVertical: 12,
            }}
            onPress={submitHandler}>
            <Text
              style={{
                width: '100%',
                fontSize: 18,
                color: 'black',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Register;
