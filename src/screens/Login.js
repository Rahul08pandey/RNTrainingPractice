import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {login} from '../actions/userAction';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginUserData = useSelector(state => state.default.user);
  console.log('Login', loginUserData);
  const userLogin = useSelector(state => state.default);
  console.log('login', userLogin);

  const rememberUser = () => {
    console.log('hlo');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    const user = {email, password};

    const userMatch = loginUserData.filter(
      loginUserData =>
        loginUserData.email === user.email &&
        loginUserData.password === user.password,
    );

    if (userMatch.length > 0) {
      dispatch(login(email, password));
    } else {
      Alert.alert('Data not available');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          flex: 0.7,
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}>
            LOGIN
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Poppins',
            }}>
            Login To Your Account
          </Text>
        </View>

        <View
          style={{
            flex: 0.35,
            width: '100%',
            justifyContent: 'space-evenly',
            // backgroundColor: 'green',
          }}>
          <TextInput
            style={{
              borderRadius: 50,
              fontFamily: 'Poppins',
              backgroundColor: '#D3D3D3',
              paddingLeft: '5%',
            }}
            value={email}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={{
              borderRadius: 50,
              fontFamily: 'Poppins',
              backgroundColor: '#D3D3D3',
              paddingLeft: '5%',
            }}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your Password"
          />
        </View>

        <View
          style={{
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'grey',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={rememberUser}>
              <Icon name="checkbox" size={25} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize: 16, color: 'black'}}>Remember Me</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.3,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'orange',
        }}>
        <View>
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              height: 50,
              backgroundColor: '#001965',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
              Don't have an account? Please SignUp first
            </Text>
          </TouchableOpacity>
          <View
            style={{
              // flex: 0.3,
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              // backgroundColor: 'orange',
            }}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                height: 50,
                backgroundColor: '#001965',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text style={{color: '#FFFFFF'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
