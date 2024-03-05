import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import IMAGES from '../../assets/images/index';
import {moderateScale} from '../../utils/Metrics';

const CustomHeader = ({height = 343}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.imgContainer, {height}]}>
        <Image source={IMAGES.can} style={[styles.img]} />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },

  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
  },

  img: {
    height: moderateScale(131),
  },
});
