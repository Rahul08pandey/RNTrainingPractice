import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Welcome = ({navigation}) => {

 const handleContinuebutton = () =>{
    navigation.navigate('Feed');
 }
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/welcome.jpg')} 
        resizeMode='contain'
        style={styles.image}
      />
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.continueBtn}>
          <Pressable onPress={handleContinuebutton}>
            <Text style={styles.pressableContinue}>Continue</Text>
          </Pressable>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 0.35,
    marginBottom: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  continueBtn:{
    backgroundColor: '#1C6758',
    width: '80%',
    borderRadius: 20,
    marginBottom: 15,
  },
  
  pressableContinue: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default Welcome;
