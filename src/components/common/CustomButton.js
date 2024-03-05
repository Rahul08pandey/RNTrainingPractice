import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../utils/Metrics';

const CustomButton = ({title, onPress, twoButton, cancelPress}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(twoButton);

  return isAuthenticated ? (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress} style={styles.resetBtn}>
        <Text style={styles.resetTxt}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cancelPress} style={styles.cancelBtn}>
        <Text style={styles.resetTxt}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resetBtn: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(20),
    width: '40%',
  },

  resetTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  cancelBtn: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(20),
    width: '40%',
  },

  button: {
    width: '100%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBD59',
  },

  text: {
    fontSize: moderateScale(16),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
});
