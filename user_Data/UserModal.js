import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UserModal({visible, onClose, onData}) {
  const [modalData, setModalData] = useState({
    user_name: 'Rahul',
    hobbies: [
      {id: 1, name: 'Playing Cricket'},
      {id: 2, name: 'Playing Video Games'},
      {id: 3, name: 'Tracking'},
    ],
  });

  const changeUsername = text => {
    setModalData(prevName => Object.assign({}, prevName, {user_name: text}));
    // console.log('data:', setModalData);
  };

  const saveData = () => {
    onClose();
    onData(modalData);
  };

  const addHobby = () => {
    <TextInput placeholder="Enter your Hobbies"></TextInput>;
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{flex: 1, padding: 10}}>
        <View>
          <Text
            style={{
              fontSize: 45,
              textAlign: 'center',
              color: 'green',
              fontFamily: 'Lugrasimo-Regular',
              // backgroundColor: 'red',
            }}>
            User Hobbies:
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Name:
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              fontSize: 16,
              // width: '100%',
              borderWidth: 2,
              paddingLeft: 10,
              backgroundColor: '#d3d3d3',
            }}
            placeholder="Enter your Name"
            value={modalData.user_name}
            onChangeText={changeUsername}></TextInput>

          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Hobbies:
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={{
                borderRadius: 10,
                fontSize: 16,
                width: '90%',
                borderWidth: 2,
                paddingLeft: 10,
                backgroundColor: '#d3d3d3',
              }}
              placeholder="Enter your Hobbies"></TextInput>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={addHobby}
                style={{alignItems: 'center'}}>
                <Ionicons name="add-circle" size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              padding: 10,
              // backgroundColor: 'green',
            }}
            onPress={saveData}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
