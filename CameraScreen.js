import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {Camera} from 'react-native-camera-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './stylesCameraScreen';
import ActionSheet from 'react-native-actions-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';

const CameraScreen = () => {
  const actionSheetRef = useRef(null);
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [cameraMode, setCameraMode] = useState('front');
  const [flash_Mode, setFlashMode] = useState('off');

  const openActionSheet = () => {
    actionSheetRef.current?.show();
    // actionSheetRef.current?.hide();    //for hiding actionsheet
  };

  const imagePicker = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log(image);
    } catch (err) {
      console.error('Does not pick image:', err);
    }
  };

  const takePhoto = async () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      try {
        const photoURI = await cameraRef.current.capture();
        setCapturePhoto(photoURI);
        setModalVisible(true); // false - close camera after capturing photo
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  const flipCamera = () => {
    setCameraMode(prevMode => (prevMode === 'front' ? 'back' : 'front'));
  };

  const flash = () => {
    setFlashMode(prevType => (prevType === 'off' ? 'on' : 'off'));
  };

  const openCamera = () => {
    setModalVisible(true);
  };

  // const pickImage = () => {
  //   ImageCropPicker.pickImage({
  //     width: 200,
  //     height: 200,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //   })
  // };

  const cancel = () => {
    actionSheetRef.current?.hide();
  };

  const closeModal =() => {
    setModalVisible(false);
    setCapturePhoto(null);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <Text style={styles.heading}>CAMERA</Text>

        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={imagePicker}
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              borderRadius: 100,
            }}>
            <Icon name="account-circle" size={120} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openActionSheet}
            style={{
              borderRadius: 20,
              borderColor: 'green',
              borderWidth: 2,
              position: 'absolute',
              // alignSelf: 'flex-end',
            }}>
            <Icon name="mode-edit" size={35} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              flex: 0.2,
              color: 'black',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Hi User....!
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <Text style={styles.cameraHeading}>CAMERA</Text>
        <Camera
          style={{
            flex: 1,
          }}
          ref={cameraRef}
          flashMode={flash_Mode}
          focusMode="off"
          cameraType={cameraMode}
          shutterPhotoSound={true}
          ratioOverlay={['Full']}
        />
        <View style={styles.controls}>
          <TouchableOpacity onPress={flash}>
            <Icon name="flash-auto" size={60} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={takePhoto}>
            <Icon name="camera" size={60} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={flipCamera}>
            <Icon name="flip-camera-android" size={60} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>

      <ActionSheet ref={actionSheetRef}>
        <View
          style={{
            height: 120,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'green',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red'
            }}
            onPress={openCamera}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                alignSelf: 'center',
                // justifyContent: 'center'
              }}>
              Open Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
            // onPress={pickImage}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                alignSelf: 'center',
              }}>
              Select from Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
            onPress={cancel}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                alignSelf: 'center',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

export default CameraScreen;
