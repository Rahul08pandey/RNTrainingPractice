import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import UserModal from './UserModal';

export default function UserData() {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      user_name: 'Aman',
      hobbies: [
        {id: 1, name: 'Reading Books'},
        {id: 2, name: 'Playing Cricket'},
        {id: 3, name: 'Watching Movies'},
      ],
    },
    {
      user_name: 'Vaibhav',
      hobbies: [
        {id: 1, name: 'Playing Cricket'},
        {id: 2, name: 'Playing Video Games'},
        {id: 3, name: 'Tracking'},
      ],
    },
  ]);

  const handleUser = newUser => {
    // console.log('first', users);
    setUsers([...users, newUser]);
  };

  const addUser = () => {
    // console.log(users);
    setModalVisible(true);
  };

  const renderHobbies = ({item}) => (
    <View style={{marginTop: 10}}>
      <Text style={{marginLeft: 10, fontSize: 16, color: 'brown'}}>
        {item.id}
        <Text style={{fontSize: 18, color: '#008080'}}> - {item.name}</Text>
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
      <UserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onData={handleUser}
      />
    </View>
  );
}

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
