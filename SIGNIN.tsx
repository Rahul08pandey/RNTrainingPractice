import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface SignInProps{}

interface SignInState {
  email: string;
  password: string;
}

GoogleSignin.configure({
  webClientId:
    '483069140545-1cj2hib3duo87b1ukvc2j9lf4l1v8epf.apps.googleusercontent.com',
  offlineAccess: true,
});

const SIGNIN: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User=', userInfo);
    } catch (error: any) {
      console.log('error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log('Error signing in:', error);
        // some other error happened
      }
    }
  };

  const rememberUser = () => {
    console.log('hlo');
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flex: 0.5,
          // alignItems: 'center',
          // justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
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
            flex: 0.5,
            width: '100%',
            justifyContent: 'space-around',
            // backgroundColor: 'green',
          }}>
          <TextInput
            style={{
              paddingLeft: 10,
              borderRadius: 20,
              fontFamily: 'Poppins',
              backgroundColor: '#D3D3D3',
            }}
            value={email}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={{
              paddingLeft: 10,
              borderRadius: 20,
              fontFamily: 'Poppins',
              backgroundColor: '#D3D3D3',
            }}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your Password"
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.05,
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

      <View
        style={{
          flex: 0.45,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'orange',
        }}>
        <View>
          <TouchableOpacity
            // onPress={handleLogin}
            style={{
              width: '48%',
              paddingVertical: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#001965',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // flex:0.1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          {/* for google sign in button */}

          <GoogleSigninButton
            style={styles.signInBtn}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            disabled={false} // You can set this to disable the button if needed
          />
          <TouchableOpacity
          // onPress={handleSignUp}
          >
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
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
              // onPress={handleSignUp}
              style={{
                width: '48%',
                paddingVertical: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#001965',
              }}>
              <Text
                style={{fontSize: 20, color: '#FFFFFF', textAlign: 'center'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* create own button of sign in  */}

      {/* <TouchableOpacity onPress={signIn} style={styles.signInBtn}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOutWithGoogle} style={styles.signOutBtn}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
          }}>
          Sign Out
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SIGNIN;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    // backgroundColor: 'lightgrey',
  },

  signInBtn: {
    width: '50%',
    alignSelf: 'center',
    paddingVertical: 10,
    // backgroundColor: 'green',
  },

  // signOutBtn: {
  //   width: '50%',
  //   borderRadius: 10,
  //   paddingVertical: 10,
  //   alignSelf: 'center',import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
  //   backgroundColor: 'blue',
  // },
});
