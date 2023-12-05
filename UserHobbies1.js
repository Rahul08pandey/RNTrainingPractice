import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UserHobbies1 = () => {
  const [user, setUser] = useState('');
  const [newUsers, setNewUsers] = useState([]);
  const [hobbies, setHobbies] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const saveData = () => {
    if (user && hobbies) {
      if (editIndex !== null) {
        const updatedUsers = [...newUsers];

        updatedUsers[editIndex] = {
          name: 'user: ' + user,
          hobbies: 'Hobbies: ' + hobbies,
        };

        setNewUsers(updatedUsers);

        setEditIndex(null);
      } else {
        setNewUsers([
          ...newUsers,
          {name: 'Name: ' + user, hobbies: 'Hobbies: ' + hobbies},
        ]);
      }

      setUser('');

      setHobbies('');

      setModalVisible(false);
    } else {
      Alert.alert('Please enter credentials correctly!');
    }
  };

  const handleEdit = index => {
    setEditIndex(index);

    setUser(newUsers[index].name);

    setHobbies(newUsers[index].hobbies);

    setModalVisible(true);
  };

  const renderUser = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginBottom: 10,

        backgroundColor: 'grey',
      }}>
      <Text
        style={{
          color: 'black',

          fontSize: 18,

          width: '100%',
        }}>
        {item.name + '\n' + item.hobbies}
      </Text>

      <TouchableOpacity
        style={{justifyContent: 'center', borderRadius: 100}}
        onPress={() => handleEdit(index)}>
        <Ionicons name="pencil" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <View>
        <Text
          style={{
            fontSize: 30,

            textAlign: 'center',

            color: '#681313',

            fontWeight: '700',
          }}>
          User Hobbies
        </Text>

        <View>
          <FlatList
            data={newUsers}
            renderItem={renderUser}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Pressable
          style={{
            alignItems: 'center',

            justifyContent: 'center',

            backgroundColor: '#01005e',

            color: 'white',

            borderWidth: 1,

            borderRadius: 10,
          }}
          onPress={() => {
            setUser('');

            setHobbies('');

            setEditIndex(null);

            setModalVisible(true);
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Add User
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={{padding: 10}}>
          <View>
            <Text
              style={{
                fontSize: 30,

                textAlign: 'center',

                color: '#2f5241',

                fontWeight: '700',
              }}>
              User Hobbies
            </Text>
          </View>

          <View style={{}}>
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

                borderWidth: 2,

                paddingLeft: 10,

                backgroundColor: '#d3d3d3',
              }}
              placeholder="Enter your Name"
              value={user}
              onChangeText={text => setUser(text)}
            />

            <Text
              style={{
                fontSize: 20,

                color: 'black',

                fontFamily: 'PlaypenSans-Medium',
              }}>
              Enter Hobbies:
            </Text>

            <TextInput
              style={{
                borderRadius: 10,

                fontSize: 16,

                borderWidth: 2,

                paddingLeft: 5,

                backgroundColor: '#d3d3d3',
              }}
              placeholder="Your Hobbies"
              value={hobbies}
              onChangeText={text1 => setHobbies(text1)}
            />
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',

              justifyContent: 'center',

              borderRadius: 20,

              padding: 10,
            }}
            onPress={saveData}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                backgroundColor: 'red',
                fontWeight: 'bold',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UserHobbies1;
