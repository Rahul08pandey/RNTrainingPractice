import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../CSS/loginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const clickLogin = () => {
    // Alert.alert('Email:' + email + '\nPassword:' + password);  //old syntax
    Alert.alert(`Email: ${email} \n Password:${password}`);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.heading}> BIOHACKER </Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2a}>
          <Text style={styles.login}> Login </Text>
          <Text style={styles.text}> Login To Your Account </Text>
        </View>

        <View style={styles.view2b}>
          <TextInput
            style={styles.mail}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"></TextInput>

          <View style={styles.psw}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"></TextInput>
            <TouchableOpacity onPress={togglePassword} style={styles.img}>
              <Image source={require('./images/eye.png')} />
            </TouchableOpacity>
          </View>

          <Text style={styles.forget}> Forget Password? </Text>
        </View>
      </View>

      <View style={styles.view3}>
        <Pressable style={styles.btn} onPress={clickLogin}>
          <Text style={styles.btnText}> Login </Text>
        </Pressable>

        <View style={styles.info}>
          <Text style={styles.info1}>
            If you don't have an account?
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
