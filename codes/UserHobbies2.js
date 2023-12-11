//give third,fourth..... name and hobbies of user through input

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {React, useState} from 'react';
// import Icon from 'react-native-vector-icons/Feather';

const UserHobbies2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      user_name: 'Aman',
      hobbies: [
        {no: 1, name: 'Reading Books'},
        {no: 2, name: 'Playing Cricket'},
        {no: 3, name: 'Watching Movies'},
      ],
    },
    {
      user_name: 'Vaibhav',
      hobbies: [
        {no: 1, name: 'Playing Cricket'},
        {no: 2, name: 'Playing Video Games'},
        {no: 3, name: 'Tracking'},
      ],
    },
  ]);

  const addUser = () => {
    const newUser = {
      user_name: 'Rahul',
      hobbies: [
        {no: 1, name: 'Playing Video Games'},
        {no: 2, name: 'Cycling'},
        {no: 3, name: 'Watching Movies'},
      ],
    };
    setUsers([...users, newUser]);
    console.log(setUsers);
  };

  const editHobby = (userNo, hobbyIndex, newHobby) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.no === userNo) {
          const updatedHobbies = [...user.hobbies];
          updatedHobbies[hobbyIndex].name = newHobby;
          return {...user, hobbies: updatedHobbies};
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const renderHobbies = ({item}) => (
    <View style={{marginTop: 10}}>
      <Text style={{marginLeft: 10, fontSize: 16}}>
        {item.no}
        <Text style={{fontSize: 18, color: '#008080'}}>- {item.name}</Text>
      </Text>
    </View>
  );

  const renderUser = ({item, index}) => (
    <View
      style={{
        borderColor: 'grey',
        borderWidth: 5,
        marginBottom: 10,
        backgroundColor: '#dddddd',
      }}>
      <Text style={styles.userTxt}>Name: {item.user_name}</Text>
      <Text style={styles.userTxt}>Hobbies:</Text>
      <FlatList
        data={item.hobbies}
        keyExtractor={hobby => hobby.name}
        renderItem={renderHobbies}></FlatList>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.heading1}>UserHobbies</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.heading2}>User and their hobbies:</Text>
        <FlatList
          data={users}
          keyExtractor={(item, index) => String(index)}
          // keyExtractor={user => user.user_name}
          renderItem={renderUser}
        />
      </View>
      <View style={styles.subContainer3}>
        <TouchableOpacity style={styles.btn} onPress={addUser}>
          <Text style={styles.btnTxt}>Add more user</Text>
        </TouchableOpacity>
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
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },

  subContainer1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },

  heading1: {
    fontSize: 55,
    color: 'green',
    // fontWeight: 'bold',
    fontFamily: 'PlaypenSans-Bold',
    textDecorationLine: 'underline',
  },

  subContainer2: {
    flex: 0.7,
    // backgroundColor: 'green',
  },

  heading2: {
    fontSize: 25,
    color: 'red',
    fontFamily: 'DancingScript-Regular',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  subContainer3: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },

  btn: {
    // flex: 1,
    width: '40%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'orange',
  },

  btnTxt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

  userTxt: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'GreyQo-Regular',
    // textDecorationLine: 'underline',
  },
});

export default UserHobbies2;
