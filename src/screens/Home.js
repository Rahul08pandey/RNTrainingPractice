import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../actions/userAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.default.userLogin);
  console.log('Home', userData);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'purple',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          WELCOME {userData.name}
        </Text>
      </View>

      <View style={{flex: 0.3}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          Your Email : {userData.email}
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          Your Password : {userData.password}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={handleLogOut}
          style={{
            borderRadius: 20,
            marginHorizontal: 20,
            backgroundColor: '#708090',
          }}>
          <Text
            style={{
              fontSize: 25,
              paddingHorizontal: 25,
              paddingVertical: 5,
              color: 'black',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
