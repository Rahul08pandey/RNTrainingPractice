import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const WhatsappNavigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'WhatsApp',
            headerTintColor: 'white',
            headerStyle: {
              height: '45%',
              backgroundColor: '#1C6758',
            },
            headerTitleStyle: {},
            headerRight: () => (
              <View style={styles.headerIcons}>
                <Feather
                  name="camera"
                  size={23}
                  color="white"
                  //   onPress={navigation.navigate('CameraScreen')}
                />
                <AntDesign name="search1" size={23} color="white" />
                <Entypo name="dots-three-vertical" size={22} color="white" />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WhatsappNavigator;

const styles = StyleSheet.create({
  headerIcons: {
    flex: 1,
    padding: 10,
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
});
