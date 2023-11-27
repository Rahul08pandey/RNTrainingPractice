import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
// import {signUp} from '../login_src/SignUp1';
// import {login} from '../login_src/Login2';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userReducer);
  console.log('Login', userData);
  // console.log('email', userState.email);
  // console.log(email);

  const rememberUser = () => {
    console.log('hlo');
  };

  const handleSignUp = () => {
    dispatch(signUp(email, password));
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    dispatch(login(email, password));
    // if (email !== userData.email && password !== userData.password) {
    //   Alert.alert('Invalid Credentials');
    // } else {
    navigation.navigate('Home');
    // }
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
          flex: 0.6,
          alignItems: 'center',
          paddingLeft: 10,
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
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
        </View>

        <View
          style={{
            flex: 0.4,
            width: '100%',
            justifyContent: 'space-between',
            // backgroundColor:'green',
          }}>
          <TextInput
            style={{
              borderRadius: 50,
              width: '100%',
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
              width: '100%',
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
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={rememberUser}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="checkbox" size={30} color="black" />
            <Text style={{fontSize: 18, color: 'black'}}>Remember Me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          // backgroundColor: 'orange',
        }}>
        <Pressable
          style={{
            height: 50,
            backgroundColor: '#001965',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
          onPress={handleLogin}>
          <Text style={{color: '#FFFFFF'}}> Login </Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'green',
        }}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
          Don't have an account? Please SignUp first
        </Text>
        <View
          style={{
            // flex: 0.1,
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            // backgroundColor: 'orange',
          }}>
          <Pressable
            style={{
              height: 50,
              backgroundColor: '#001965',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}
            onPress={handleSignUp}>
            <Text style={{color: '#FFFFFF'}}> Sign Up </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
