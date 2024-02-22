import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

const Post = ({navigation, route}) => {
  const photo = route.params?.photo;
  const [caption, setCaption] = useState('');
  const [posts, setPosts] = useState([]);

  const openCamera = () => {
    navigation.navigate('Home');
  };

  const capturedPhoto = `data:${photo.mime};base64,${photo.data}`;
  console.log('capturedPhoto', photo);

  const uploadPost = async () => {
    const user = {
      uri: photo,
      caption: caption,
    };

    if (photo) {
      database()
        .ref('/posts')
        .push(user)
        .then(() => {
          console.log('Post added successfully');
        })
        .catch(error => {
          console.error('Error adding post to DB:', error);
        });

      const newPosts = [...posts, {photo, caption}];
      setPosts(newPosts);
      navigation.navigate('Home', {posts: newPosts});
      setCaption('');
    } else {
      Alert.alert('Please upload photo and caption');
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add Image</Text>
        {photo ? (
          <Image style={styles.image} source={{uri: photo}} />
        ) : (
          <>
            <View style={styles.cameraButton}>
              <IonIcons name="camera" size={40} color="black" />
              <TouchableOpacity onPress={openCamera}>
                <Text style={{fontSize: 18, color: 'black'}}>Open Camera</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add Caption</Text>
        <TextInput
          multiline
          value={caption}
          style={styles.captionInput}
          placeholder="Write a caption..."
          onChangeText={text => setCaption(text)}
        />
      </View>

      <View
        style={
          {
            // flex: 0.1,
            // backgroundColor: 'red',
            // justifyContent: 'flex-end',
          }
        }>
        <TouchableOpacity style={styles.postButton} onPress={uploadPost}>
          <Text style={styles.uploadTxt}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'black',
  },

  heading: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    height: 250,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    // backgroundColor: 'gray',
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },

  captionInput: {
    paddingLeft: 15,
    width: '100%',
    height: 100,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 10,
    textAlignVertical: 'top',
    padding: 10,
  },

  cameraButton: {
    gap: 30,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },

  postButton: {
    // height: '100%',
    width: '100%',
    borderRadius: 10,
    marginTop: 20,

    backgroundColor: '#1C6758',
    justifyContent: 'center',
  },

  uploadTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
});
