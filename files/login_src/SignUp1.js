import {View, Text, TextInput, Alert, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {signUp} from '../../src/actions/userAction';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector(state => state.userReducer);
  console.log('signUp', userData);

  const handleSignUp = () => {
    dispatch(signUp(name, email, contact, password));
    // navigation.navigate('Login');
  };

  return (
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
        <Text style={{color: 'black', fontSize: 18}}>SignUp Your Account</Text>
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
          placeholder="Enter your Contact"
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
  );
};

export default SignUp;
