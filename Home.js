import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) =>{
const {userName,userEmail,userCountry,userGender,userPassword,userConfirmPassword} = route.params;

 const handleGoBack = () => {
    //1-  Using goBack
    navigation.goBack();

 // 2- Using navigate
 // navigation.navigate('Register');
 };


return(
  <View>
  <View style={{flex:1, padding: 10, justifyContent: 'center'}}> 
  <Text>Welcome to Home Page!!
  </Text>
  </View>
  <View>
  <Text> Name: {userName}</Text>
  <Text> Email: {userEmail}</Text>
  <Text> Country: {userCountry}</Text>
  <Text> Gender: {userGender}</Text>
  <Text> Password: {userPassword}</Text>
  <Text> ConfirmPassword: {userConfirmPassword}</Text>
  </View>

<View>
<Button title= "Go back to Home Screen" onPress= {handleGoBack}/>
</View>
</View>
)
}

export default Home;
