import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import UserModal from './UserModal';

export default function UserData() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState([
    {
      user_name: 'Rahul',
      hobbies: [{name: 'Cycling'}, {name: 'Video Games'}],
    },
    {
      user_name: 'Aman',
      hobbies: [{name: 'Walking'}, {name: 'Dancing'}],
    },
  ]);

  const addUser = () => {
    setModalVisible(true);
  };

  const renderHobbies = ({item}) => (
    <View style={{marginTop: 10}}>
      <Text style={{fontSize: 18, color: '#008080', marginLeft: 20}}>
        {item.name}
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
        keyExtractor={(hobby, index) => String(index)}
        renderItem={renderHobbies}></FlatList>
    </View>
  );

  const handleAddUser = usersData => {
    setUserData(prevUser => {
      const setUserData = Object.assign({}, prevUser, usersData);
      return setUserData;
    });
    // setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.heading1}>UserHobbies</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.heading2}>User and their hobbies:</Text>
        <FlatList
          data={userData}
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
        onRequestClose={() => setModalVisible(false)}
        onAddUsers={handleAddUser}
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
    fontSize: 30,
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
