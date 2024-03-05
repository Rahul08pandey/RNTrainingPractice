import React, {useState, useRef} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IMAGES from '../../assets/images';
import styles from './styles';

const slides = [
  {
    key: 'one',
    text: 'Chandigarh Angels Network is a community of successful entrepreneurs turned angel investors.',
    image: IMAGES.slider1,
  },
  {
    key: 'two',
    text: 'We mainly focus on helping startups at seed & growth stage.',
    image: IMAGES.slider2,
  },
  {
    key: 'three',
    text: 'We are doing our bit with bespoke mentoring and handholding to the Startups wherever and whenever required.',
    image: IMAGES.slider3,
  },
];

const Slider = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const _renderItem = ({item}) => {
    return (
      <ImageBackground style={styles.slideBackground} source={item.image}>
        <View style={styles.contentContainer}>
          <Image style={styles.logo} source={IMAGES.can} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={_onNext}>
          <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  const _onNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
      sliderRef.current.goToSlide(index + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <AppIntroSlider
      ref={sliderRef}
      renderItem={_renderItem}
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      activeDotStyle={styles.activeDot}
      onSlideChange={newIndex => setIndex(newIndex)}
    />
  );
};

export default Slider;
