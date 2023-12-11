import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../actions/userAction';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const signUpUser = useSelector(state => state.default.user);
  console.log('signUp', signUpUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (
      name === '' ||
      email === '' ||
      address === '' ||
      contact === '' ||
      password === ''
    ) {
      Alert.alert('Please fill all the details !');
    } else {
      dispatch(signUp(name, email, address, contact, password));
      Alert.alert('SignUp successful!');
      navigation.navigate('Login');
    }
  };

  return (
    <ImageBackground
      source={require('../../images/bg1.jpeg')}
      resizeMode="cover"
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          padding: 10,
          // justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'yellow',
          }}>
          <Text style={{color: 'blue', fontSize: 40, fontWeight: 'bold'}}>
            SIGNUP
          </Text>
          <Text style={{color: 'black', fontSize: 16}}>
            SignUp Your Account
          </Text>
        </View>
        <View
          style={{
            flex: 0.75,
            justifyContent: 'space-evenly',
            // backgroundColor: 'green',
          }}>
          <TextInput
            style={{
              // flex: 0.2,
              paddingLeft: 15,
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            value={name}
            placeholder="Enter your Name"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={{
              // flex: 0.2,
              paddingLeft: 15,
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            value={email}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={{
              // flex: 0.2,
              paddingLeft: 15,
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            value={address}
            placeholder="Enter your Address"
            onChangeText={text => setAddress(text)}
          />
          <TextInput
            style={{
              // flex: 0.2,
              paddingLeft: 15,
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            placeholder="Enter your Contact No"
            value={contact}
            keyboardType="numeric"
            onChangeText={text => setContact(text)}
          />
          <TextInput
            style={{
              // flex: 0.2,
              paddingLeft: 15,
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            placeholder="Enter your Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Pressable
            onPress={handleSignUp}
            style={{
              backgroundColor: 'green',
              borderRadius: 20,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                width: '100%',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
