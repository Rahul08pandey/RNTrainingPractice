import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';
import {moderateScale} from '../../utils/Metrics';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const openLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    setShowAlert(true);
  };

  const handleLogin = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <CustomHeader height={246} />

      <View style={styles.registerContainer}>
        <Text
          style={{
            fontSize: moderateScale(30),
            color: '#000000',
            marginBottom: moderateScale(10),
            fontFamily: 'Nunito-SemiBold',
          }}>
          Become an Investor
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            value={name}
            placeholder="Enter Name"
            style={styles.txtInput}
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            value={email}
            style={styles.txtInput}
            placeholder="Enter Email"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <Text style={styles.txtInputHeading}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            value={password}
            placeholder="Enter Password"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            style={styles.passwordTxtInput}
            onChangeText={text => setPassword(text)}
          />
          <Image source={IMAGES.eye} style={styles.eyeIcon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput
            value={organization}
            style={styles.txtInput}
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            placeholder="Enter Organization"
            onChangeText={text => setOrganization(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>State</Text>
          <TextInput
            value={state}
            style={styles.txtInput}
            placeholder="Enter State"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => setState(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput
            value={city}
            style={styles.txtInput}
            placeholder="Enter City"
            placeholderTextColor="#00000045"
            onChangeText={text => setCity(text)}
          />
        </View>
        <CustomButton title="Register" onPress={handleRegister} />
        <TouchableOpacity style={styles.alreadyBtn} onPress={openLogin}>
          <Text style={styles.alreadyTxt}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
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
