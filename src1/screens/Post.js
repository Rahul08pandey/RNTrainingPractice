//  import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// const Post = () => {
//   return (
//     <View style={styles.mainContainer}>
//       <View>
//         <Text
//           style={{
//             fontSize: 14,
//             fontWeight:'500',
//             color: '#000000',
//             marginBottom:10,
//             fontFamily: 'Poppins',
//           }}>
//           Select Image
//         </Text>
//         <View style={styles.inputStyle}>
//           <TouchableOpacity>
//             <Image style={styles.img} source={require('../image/plus.png')} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <Text
//           style={{
//             fontSize: 14,
//             marginTop:10,
//             marginBottom:10,
//             fontWeight:'500',
//             color: '#000000',
//             fontFamily: 'Poppins',
//           }}>
//           Add Caption
//         </Text>
//         <TextInput style={styles.inputStyle2} />
//       </View>
//       <TouchableOpacity style={styles.submitContainer}>
//         <Text
//           style={{
//             width: '100%',
//             fontSize: 18,
//             color: '#FFFFFF',
//             fontWeight:'600',
//             textAlign: 'center',
//             marginVertical: 10,
//             fontFamily: 'Poppins',
//           }}>
//           Upload
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Post;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     margin: 20,
//   },

//   inputStyle: {
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     width: '100%',
//     backgroundColor: '#F2F2F2',
//     borderRadius: 10,
//     borderColor: '#006175',
//     borderWidth: 0.5,
//     marginTop: 2,
//     height: 150,
//   },

//   img: {
//     margin: '3%',
//   },

//   inputStyle2: {
//     paddingLeft: 15,
//     width: '100%',
//     backgroundColor: '#F2F2F2',
//     borderRadius: 10,
//     borderColor: '#006175',
//     borderWidth: 0.5,
//     marginTop: 2,
//     height: 100,
//   },

//   submitContainer: {
//     marginTop:20,
//     borderRadius: 10,
//     backgroundColor: '#1C6758',
//   },

// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

const Post = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleImagePress = () => {
    toggleModal();
  };

  const handleCapture = event => {
    setCapturedImage(event.captureImages[0].uri);
    toggleModal();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000000',
            marginBottom: 10,
            fontFamily: 'Poppins',
          }}>
          Select Image
        </Text>
        <TouchableOpacity onPress={handleImagePress}>
          <View style={styles.inputStyle}>
            {capturedImage ? (
              <Image style={styles.imageIcon} source={{uri: capturedImage}} />
            ) : (
              <Image
                style={styles.plusIcon}
                source={require('../image/plus.png')}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            fontWeight: '500',
            color: '#000000',
            fontFamily: 'Poppins',
          }}>
          Add Caption
        </Text>
        <TextInput
          style={styles.inputStyle2}
          multiline
          placeholder="Write a caption..."
        />
      </View>

      <TouchableOpacity style={styles.submitContainer}>
        <Text
          style={{
            width: '100%',
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '600',
            textAlign: 'center',
            marginVertical: 10,
            fontFamily: 'Poppins',
          }}>
          Upload
        </Text>
      </TouchableOpacity>

      {/* Native Modal (Camera & Image Picker) */}
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        {capturedImage ? (
          <View style={styles.imagePreviewContainer}>
            <Image style={styles.imagePreview} source={{uri: capturedImage}} />
            <Button title="Cancel" onPress={toggleModal} color="#FFF" />
          </View>
        ) : (
          <CameraScreen
            actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
            onBottomButtonPressed={handleCapture}
            flashImages={{
              on: require('../image/flash-on.png'),
              off: require('../image/flash-off.png'),
              auto: require('../image/flash-auto.png'),
            }}
            cameraFlipImage={require('../image/camera-flip.png')}
            captureButtonImage={require('../image/capture-button.png')}
            torchOnImage={require('../image/flash-on.png')}
            torchOffImage={require('../image/flash-off.png')}
            hideControls={false}
            showCapturedImageCount={false}
          />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
    // backgroundColor: '#FFF',
  },

  inputContainer: {
    marginBottom: 20,
  },

  inputStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
    height: 150,
  },

  plusIcon: {
    margin: '3%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    tintColor: '#888',
  },

  imageIcon: {
    width: '100%',
    height: '100%',
  },

  inputStyle2: {
    paddingLeft: 15,
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
    height: 100,
  },

  submitContainer: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },

  submitButtonText: {
    fontSize: 25,
    color: 'white',
  },

  imagePreviewContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagePreview: {
    width: '80%',
    height: '80%',
  },
});

export default Post;
