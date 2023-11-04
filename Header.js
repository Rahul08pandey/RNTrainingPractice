import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';

const Header=() => {
  return(
    <View style= {styles.header}>
    <Text style={styles.title}>Register</Text>
    </View>
  );
};


const styles=StyleSheet.create({
  header:{ 
    backgroundColor: 'orange',
    padding: 10,
  },
  
  title:{
    color: 'white',
    fontSize: 16,
  },
});

export default Header;