import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';
import {moderateScale} from '../../utils/Metrics';
import {Dropdown} from 'react-native-element-dropdown';
import {Formik} from 'formik';
import RegisterForm from './RegisterForm';

const Register = ({navigation, onSubmit}) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [organization, setOrganization] = useState('');
  // const [state, setState] = useState('');
  // const [city, setCity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRegister = async userData => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://54.190.192.105:9185/angel/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      );
      const data = await response.json();
      setLoading(false);
      console.log('Registration response:', data);
      setShowAlert(true);
    } catch (error) {
      console.error('Error registering user:', error);
      setLoading(false);
    }
  };

  const fetchStates = async state => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://54.190.192.105:9185/angel/get_all_state',
      );
      const states = await response.json();
      setStates(states.result);
      console.log('States:', states.result);
    } catch (err) {
      console.log('Error fetching states:', err);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const openLogin = () => {
    navigation.navigate('Login');
  };

  // const handleRegister = () => {
  //   setShowAlert(true);
  // };

  const handleLogin = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    organization: '',
    state: '',
    city: '',
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <CustomHeader height={246} />

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterForm}
        onSubmit={handleRegister}>
        {({handleChange, handleSubmit, errors, values}) => (
          <View style={styles.registerContainer}>
            <Text
              style={{
                color: '#000000',
                fontSize: moderateScale(30),
                fontFamily: 'Nunito-SemiBold',
                marginBottom: moderateScale(10),
              }}>
              Become an Investor
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Name</Text>
              <TextInput
                value={values.name}
                placeholder="Enter Name"
                style={styles.txtInput}
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                onChangeText={handleChange('name')}
              />
              {errors.name && <Text style={styles.errTxt}>{errors.name}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Email</Text>
              <TextInput
                value={values.email}
                style={styles.txtInput}
                placeholder="Enter Email"
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={styles.errTxt}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={values.password}
                  placeholder="Enter Password"
                  placeholderTextColor="rgba(0, 0, 0, 0.27)"
                  style={styles.passwordTxtInput}
                  onChangeText={handleChange('password')}
                />
                <Image source={IMAGES.eye} style={styles.eyeIcon} />
              </View>
              {errors.password && (
                <Text style={styles.errTxt}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Organization</Text>
              <TextInput
                value={values.organization}
                style={styles.txtInput}
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                placeholder="Enter Organization"
                onChangeText={handleChange('organization')}
              />
              {errors.organization && (
                <Text style={styles.errTxt}>{errors.organization}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>State</Text>
              <Dropdown
                data={states}
                labelField="state"
                valueField="_id"
                onChange={item => handleChange('state')(item.state)}
                activeColor="#e3f2fd"
                style={styles.dropDown}
                placeholder="Select State"
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
              />

              {errors.state && (
                <Text style={styles.errTxt}>{errors.state}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>City</Text>
              <TextInput
                value={values.city}
                style={styles.txtInput}
                placeholder="Enter City"
                placeholderTextColor="#00000045"
                onChangeText={handleChange('city')}
              />
              {errors.city && <Text style={styles.errTxt}>{errors.city}</Text>}
            </View>
            <CustomButton title="Register" onPress={handleSubmit} />
            <TouchableOpacity style={styles.alreadyBtn} onPress={openLogin}>
              <Text style={styles.alreadyTxt}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {showAlert && (
        <CustomAlert
          noTitle
          onPress={handleLogin}
          btnTxt="Continue"
          message="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
          onClose={() => setShowAlert(false)}
        />
      )}
    </ScrollView>
  );
};

export default Register;
