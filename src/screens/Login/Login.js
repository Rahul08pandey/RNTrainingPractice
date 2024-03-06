import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
    console.log('first');
  };

  const handleReset = () => {
    navigation.navigate('ForgotPassword');
    console.log('first');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Password</Text>
          <View style={styles.inputTxt}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="rgba(0, 0, 0, 0.27)"
              style={styles.txtInput1}
            />
            <Image source={IMAGES.eye} style={styles.eyeIcon} />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={handleReset}>
            <Text style={styles.btnTxt}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.btnTxt}>Become an Investor</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
