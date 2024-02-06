import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  // const dispatch = useDispatch();
  const [registeredUserData, setRegisteredUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loadData, setLoadData] = useState(true);
  // const registeredUser = useSelector((state) => state.userReducer.user);
  // console.log("User =", registeredUser);

   useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://dummyapi.io/data/v1/user?created=1/',
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': '65b9f249af8a80c525603fda',
            },
          },
        );
        if (!response.ok) {
          console.error('Error fetching user data:', response.status);
          return;
        }

        const data = await response.json();
        console.log('API response:', data);
        setRegisteredUserData(data.data);
        setLoadData(false); // Set loading to false after updating the state
      } catch (error) {
        console.error('Error during API call:', error);
        setLoadData(false); // Set loading to false in case of an error
      }
    };

    fetchUserData();
  }, []);

   useEffect(() => {
    console.log('State after API call:', registeredUserData);
  }, [registeredUserData]);

  const handleLogin = () => {
    console.log('DATA', registeredUserData);

    if (loadData) {
      // Optionally handle loading state
      Alert.alert('Please wait, data is still loading.');
      return;
    }

    if (!Array.isArray(registeredUserData)) {
      Alert.alert('Invalid user data format.');
      return;
    }

    const matchingUsers = registeredUserData.filter(
      user => user.firstName === firstName && user.lastName === lastName,
    );

    if (matchingUsers.length > 0) {
      Alert.alert('Sign In Successful!', JSON.stringify(matchingUsers));
      // Navigate to the Home screen or perform other actions
      navigation.navigate('Login');
    } else {
      Alert.alert('Please Check your Credentials');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeading}>
        <Text style={styles.signIn}>Sign In</Text>
          <Text style={styles.loginTxt}>Enter your credentials</Text>
      </View>
      
      <View style={styles.containerLogin}>
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.txtInput}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
        </View>

        <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Last Name</Text>
        <TextInput                    
          style={styles.txtInput1}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
         </View>
      </View>

 {loadData ? (
          <ActivityIndicator size="large" color="#1C6758" />
        ) : (

      // <View style={styles.login_container}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.pressableLogin}>Login</Text>
          </TouchableOpacity>
 )}

          <Text style={styles.act_signup}>
            Don't have an account? {''}
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUp}>SignUp</Text>
            </TouchableOpacity>
          </Text>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  containerHeading:{
    flex:0.2,
    justifyContent:'center',
    // backgroundColor:'yellow',
  },

  containerLogin: {
    flex: 0.7,
    // justifyContent: 'space-around',
    // backgroundColor:'green',
  },

  inputContainer:{
    marginBottom:20,
  },

  loginTxt: {
    fontFamily:'Poppins',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },

  signIn: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    fontFamily:'Poppins',
  },

  txtInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#006175',
    backgroundColor: '#F2F2F2',
  },

   txtInput1: {
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },

  login_container: {
    // flex: 0.1,
    alignItems: 'center',
  },

  loginBtn: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#1C6758',
  },

  pressableLogin: {
    fontSize: 20,
    paddingTop: 10,
    color: '#FFFFFF',
    paddingBottom: 10,
    textAlign: 'center',
  },
  
  inputText: {
    fontSize: 14,
    color: 'black',
    marginBottom:10,
    fontWeight:'500',
    fontFamily:'Poppins',
  },
  
  act_signup: {
    fontSize: 14,
    color:'#000000',
    fontWeight:'500',
    fontFamily:'Poppins',
    alignSelf: 'center',
  },

  signUp: {
    fontSize: 14,
    fontWeight:'500',
    fontFamily:'Poppins',
    color: '#1C6758',
  },

});

export default Login;
