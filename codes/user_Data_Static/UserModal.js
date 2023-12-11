import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UserModal({visible, onRequestClose, onAddUsers}) {
  const [userName, setUserName] = useState('');
  const [hobbies, setHobbies] = useState([{name: ''}]);

  const saveData = () => {
    const userData = {
      userName: userName,
      hobbies: hobbies,
    };
    onAddUsers(Object.assign({}, userData));
    onRequestClose();
  };

  const addHobby = () => {
    setHobbies([...hobbies, {name: ''}]);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{flex: 1, padding: 10}}>
        <View>
          <Text
            style={{
              fontSize: 50,
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
              fontSize: 22,
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
            value={userName}
            onChangeText={text => setUserName(text)}></TextInput>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Hobbies:
          </Text>
          {hobbies.map((hobby, index) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                style={{
                  borderRadius: 10,
                  fontSize: 16,
                  width: '90%',
                  borderWidth: 2,
                  paddingLeft: 10,
                  backgroundColor: '#d3d3d3',
                }}
                placeholder="Enter your Hobbies"
                value={hobby.name}
                key={index}
                onChangeText={text => {
                  const updateHobbies = [...hobbies];
                  updateHobbies[index].name = text;
                  setHobbies(updateHobbies);
                }}></TextInput>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={addHobby}
                  style={{alignItems: 'center'}}>
                  <Ionicons name="add-circle" size={40} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
            <Text style={{color: 'black', fontSize: 18}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
