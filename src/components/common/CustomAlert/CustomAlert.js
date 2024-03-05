import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';
import styles from './styles';
import CustomButton from '../CustomButton';

const CustomAlert = ({
  btnTxt,
  dButton,
  message,
  noTitle,
  onPress,
  title,
  cancelPress,
  visible,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resetScreen, setResetScreen] = useState(dButton);
  const [isAuthenticated, setisAuthenticated] = useState(true);

  return isAuthenticated ? (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.mainContainer}>
        <View style={styles.modalView}>
          <Text style={styles.titleTxt}>{title}</Text>
          <Text style={styles.popupTxt}>{message}</Text>
          <CustomButton
            title={btnTxt}
            onPress={onPress}
            twoButton={resetScreen}
          />
        </View>
      </View>
    </Modal>
  ) : (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.mainContainer}>
        <View style={styles.modalView}>
          <Text style={styles.popupTxt}>{message}</Text>
          <CustomButton
            title={btnTxt}
            onPress={onPress}
            twoButton={resetScreen}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
