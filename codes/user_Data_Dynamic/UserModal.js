import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default UserModal = ({visible, onClose, onAddUser}) => {
  const [userName, setUserName] = useState('');
  const [hobbies, setHobbies] = useState([{name: ''}]);

  const addHobby = () => {
    setHobbies([...hobbies, {name: ''}]);
    console.log('first', setHobbies);
  };

  const handleSaveUser = () => {
    const updateHobbies = hobbies || [];
    onAddUser(userName, updateHobbies);
    onClose();
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{flex: 1, padding: 10}}>
        {/* <View></View> */}
        <Text style={styles.heading}>User Hobbies:</Text>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Name:
          </Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Enter Your Name"
            // value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Hobbies:
          </Text>
          {hobbies.map((hobby, index) => (
            <View style={styles.hobbiesContainer}>
              <TextInput
                key={index}
                style={styles.hobbyInput}
                placeholder="Enter Your Hobbies"
                // value={hobby.name}
                onChangeText={text => {
                  const updateHobbies = [...hobbies];
                  updateHobbies[index].name = text;
                  setHobbies(updateHobbies);
                }}></TextInput>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                {index === hobbies.length - 1 && (
                  <TouchableOpacity
                    onPress={addHobby}
                    style={{alignItems: 'center'}}>
                    <Ionicons name="add-circle" size={40} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={handleSaveUser}
            style={styles.saveUserButton}>
            <Text style={styles.btnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    textAlign: 'center',
    color: 'green',
    fontFamily: 'Lugrasimo-Regular',
    // backgroundColor: 'red',
  },
  nameInput: {
    borderRadius: 10,
    fontSize: 16,
    // width: '100%',
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: '#d3d3d3',
  },

  hobbyInput: {
    borderRadius: 10,
    fontSize: 16,
    width: '90%',
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: '#d3d3d3',
  },

  hobbiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  saveUserButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    // backgroundColor: 'green',
  },

  btnTxt: {
    color: 'black',
    fontSize: 18,
  },
});
