//name and hobbies of user from input/dynamic data:

import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserModal from './user_Data_Static/UserModal';

const UserHobbies = () => {
  const [user, setUser] = useState('');
  const [newUser, setNewUser] = useState([]);
  const [hobby, setHobby] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const save = () => {
    if (user && hobby) {
      setNewUser([
        ...newUser,
        {name: 'Name:' + user, hobby: 'Hobbies:' + hobby},
      ]);
      setUser('');
      setHobby('');
      setModalVisible(false);
    } else {
      Alert.alert('Please fill all the fields!');
    }
  };

  const addHobby = () => {
    <TextInput
      placeholder="Enter your Hobbies"
      value={hobby}
      onChangeText={text => setHobby(text)}></TextInput>;
    // console.log(addHobby);
  };

  const editHobby = () => {
    // setEditIndex(index);
    // setUser(newUser[index].name);
    // setHobby(newUser[index].hobby);
    setModalVisible(true);
  };

  const renderUser = ({item, index}) => (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 3,
        borderColor: 'grey',
        backgroundColor: '#dddddd',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          width: '100%',
        }}>
        {item.name + '\n' + item.hobby}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={editHobby}>
            <Ionicons name="add-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        // backgroundColor: 'green',
      }}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            color: 'blue',
            fontFamily: 'PlaypenSans-Bold',
          }}>
          User Hobbies
        </Text>
        <View style={{}}>
          <FlatList
            data={newUser}
            renderItem={renderUser}
            keyExtractor={(item, index) => index.toString()}></FlatList>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              width: '40%',
              backgroundColor: 'orange',
              color: 'white',
              borderWidth: 1,
              borderRadius: 10,
              // position: 'absolute',
              // bottom: 20,
              // right: 20,
              // left: 20,
              // padding: 15,
              // alignItems: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
              Add User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={{padding: 10}}>
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
              value={user}
              onChangeText={text => setUser(text)}></TextInput>

            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'PlaypenSans-Medium',
              }}>
              Enter Hobbies:
            </Text>
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
                value={hobby}
                onChangeText={text => setHobby(text)}></TextInput>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={addHobby}
                  style={{alignItems: 'center'}}>
                  <Ionicons name="add-circle" size={40} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              padding: 10,
              // backgroundColor: 'green',
            }}
            onPress={save}>
            <Text style={{fontSize: 18, color: 'black'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UserHobbies;
