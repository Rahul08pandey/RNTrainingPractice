import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Alert,ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/actions';

const Register = ({ navigation }) => {
  // const dispatch = useDispatch();
   const [registeredUserData, setRegisteredUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loadData,setLoadData]=useState(true);

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

  const handleRegister = () => {
    console.log('Data', registeredUserData);

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
      Alert.alert('Sign In Successful', JSON.stringify(matchingUsers));
      // Navigate to the Home screen or perform other actions
    } else {
      Alert.alert('Please Check your Credentials');
    }
  };

  const handleLogin=()=>{
    navigation.navigate('Login');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingTxt}>
        <Text
          style={{
            fontSize: 20,
            marginBottom:5,
            fontWeight:'600',
            color: '#000000',
            fontFamily: 'Poppins',
          }}>
          Personal Information
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight:'500',
            color: '#000000',
            fontFamily: 'Poppins',
          }}>
          Please fill the following
        </Text>
      </View>

    <View style={styles.inputContainers}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>First Name</Text>
        <TextInput
          style={styles.inputStyle}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        </View>

      <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Last Name</Text>
        <TextInput                    
          style={styles.inputStyle1}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
         </View>

       {/* <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.inputStyle1}
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
         </View>

        <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput                    
          style={styles.inputStyle1}
          value={password}
          onChangeText={text => setPassword(text)}
        />
         </View> */}
         </View>

 {loadData ? (
          <ActivityIndicator size="large" color="#1C6758" />
        ) : (
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerBtn}>
          <Text style={styles.registerBtnTxt}>Register</Text>
        </TouchableOpacity>
        )}

        <Text
          style={{
            fontSize: 18,
            fontWeight:'500',
            color: '#000000',
             textAlign: 'center',
                marginVertical: 10,

            fontFamily: 'Poppins',
          }}>
          Already have an account? {''}
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 14,
                fontWeight:'700',
                color: '#000000',
                fontFamily: 'Poppins',
                textDecorationLine: 'underline',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
          </Text>
          </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  headingTxt: {
    flex: 0.15,
     marginTop: 20,
    justifyContent: 'center',
    // backgroundColor: 'purple',
  },

  register: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom:10,
  },

  account: {
    color: 'black',
    fontSize: 18,
  },

  inputContainers:{
    flex: 0.75,
    // backgroundColor: 'green',
  },

  inputContainer: {
    // flex: 0.75,
    //  padding: 20,
    // justifyContent: 'space-evenly',
  },

  inputText:{
    fontSize: 14,
    color:'black',
    marginBottom:10,
    fontWeight:'500',
    fontFamily:'Poppins',
  },

  inputStyle: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom:30,
    borderColor: '#006175',
    backgroundColor: '#F2F2F2',
  },

  inputStyle1: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },

  registerBtn: {
    marginTop:10,
    borderRadius: 10,
    marginBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C6758',
  },

  registerBtnTxt: {
    marginVertical: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
