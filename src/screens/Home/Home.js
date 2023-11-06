import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({ route }) => {
  const { name, email, gender, password,country } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    //1-  Using goBack
    navigation.goBack('Register');

    // 2- Using navigate
    // navigation.navigate('Register');
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-evenly',
        // justifyContent: 'center',
        // backgroundColor: 'red',
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 28, color: 'red', fontWeight: 'bold'}}>
          Welcome to Home Page!!
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20}}> Name: {name}</Text>
        <Text style={{fontSize: 20}}> Email: {email}</Text>
        <Text style={{fontSize: 20}}> Country: {country}</Text>
        <Text style={{fontSize: 20}}> Gender: {gender}</Text>
        <Text style={{fontSize: 20}}> Password: {password}</Text>
      </View>

      <View>
        <Button title="Go back to Home Screen" onPress={handleGoBack} />
      </View>
    </View>
  );
};

export default Home;
