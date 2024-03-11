import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Formik} from 'formik';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';
import LoginForm from './LoginForm';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/Services/api';
import {userLogin} from '../../redux/actions/actions';

const Login = ({navigation, onSubmit}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const loginData = useSelector(state => state.auth.user);
  // console.log(loginData, 'Datalogin');

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await loginUser(email, password);
      console.log('response', response);
      setLoading(false);

      if (response.status) {
        navigation.navigate('Home');
        // dispatch(response);
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleReset = () => {
    navigation.navigate('ForgotPassword');
    console.log('first');
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={LoginForm}>
        {({handleSubmit, values, errors, touched, handleChange}) => (
          <View style={styles.loginContainer}>
            <Text style={styles.loginHeading}>Login</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Email</Text>
              <TextInput
                placeholder="Enter Email"
                value={values.email}
                onChangeText={handleChange('email')}
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                style={styles.txtInput}
              />
              {errors.email && (
                <Text style={styles.errTxt}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Password</Text>
              <View style={styles.inputTxt}>
                <TextInput
                  placeholder="Enter Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholderTextColor="rgba(0, 0, 0, 0.27)"
                  style={styles.txtInput1}
                  secureTextEntry
                />
                <Image source={IMAGES.eye} style={styles.eyeIcon} />
              </View>
              {errors.password && (
                <Text style={styles.errTxt}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={handleReset}>
                <Text style={styles.btnTxt}>Forgot Password ?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.btnTxt}>Become an Investor</Text>
              </TouchableOpacity>
            </View>

            <CustomButton title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
