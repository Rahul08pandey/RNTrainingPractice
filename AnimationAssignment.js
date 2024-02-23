import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Image,
  Easing,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const AnimationAssignment = () => {
  const [item, setItem] = useState('');
  const searchAnimation = useRef(new Animated.Value(0)).current;
  const micAnimation = useRef(new Animated.Value(1)).current;
  const imgAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const zoomIn = Animated.timing(searchAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const zoomOut = Animated.timing(searchAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const zoomLoop = Animated.loop(Animated.sequence([zoomIn, zoomOut]));

    zoomLoop.start();

    return () => {
      zoomLoop.stop();
    };
  });

  const handleMic = () => {
    Animated.sequence([
      Animated.timing(micAnimation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(micAnimation, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
    console.log('Mic clicked');
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(imgAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      {iterations: -1},
    ).start();
  });

  const rotate = imgAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <IonIcons name="caret-back" size={20} color="black" />
        <Text style={{color: 'black', marginBottom: 5, fontSize: 14}}>
          Search
        </Text>
      </View>
      <View style={styles.txtInputContainer}>
        <Animated.View style={{transform: [{scale: searchAnimation}]}}>
          <AntDesign
            name="search1"
            size={20}
            color="red"
            style={{
              left: 10,
              marginRight: 5,
            }}
          />
        </Animated.View>
        <TextInput
          placeholder="Restaurant name or a dish..."
          style={styles.inputTxt}
          value={item}
          onChangeText={setItem}
        />
        <View style={styles.line}></View>
        <Animated.View style={{transform: [{scale: micAnimation}]}}>
          <Feather
            name="mic"
            size={20}
            color="red"
            style={{
              top: 0,
              right: 10,
            }}
            onPress={handleMic}
          />
        </Animated.View>
      </View>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.offerImg, {transform: [{rotate: rotate}]}]}
          source={require('./images/discount-badge.png')}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Offers
        </Text>
        <Text style={{color: 'blue'}}>Flat Discounts</Text>
      </View>
    </View>
  );
};

export default AnimationAssignment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'green',
  },

  headingContainer: {
    flexDirection: 'row',
  },

  txtInputContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d3d3d3',
  },

  inputTxt: {
    flex: 1,
    marginLeft: 10,
  },

  line: {
    height: 50,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
  },

  contentContainer: {
    width: '30%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  offerImg: {
    paddingTop: 10,
    marginBottom: 10,
  },
});
