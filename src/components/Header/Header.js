import {Image, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import IMAGES from '../../assets/images/index';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  renderImage = true,
  renderText = false,
  drawer = true,
  back = false,
}) => {
  const navigation = useNavigation();

  const handleDrawer = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <TouchableOpacity onPress={drawer ? handleDrawer : goBack}>
          {drawer && <Image source={IMAGES.drawer} resizeMode="cover" />}
          {back && (
            <Image
              source={IMAGES.left}
              style={{height: 20, width: 20}}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        {renderImage && <Image source={IMAGES.can} style={styles.img} />}
        <View style={styles.txtContainer}>
          {renderText && <Text style={styles.headerTxt}>{renderText}</Text>}
        </View>
      </View>
    </View>
  );
};

export default Header;
