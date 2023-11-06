import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Header = ({ title }) => {
  return (
    <View style={styles.head}>
          <Text>{title}</Text>
    </View>
  )
}

export default Header;
