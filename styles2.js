import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    // backgroundColor: 'purple',
  },

  view1: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  heading: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },

  view2: {
    flex: 0.5,
    gap: 20,
    alignItems: 'center',
    // backgroundColor: 'green',

  },

  view2a: {
    // backgroundColor: 'yellow',
  },

  login: {
    color: '#001965',
    fontSize: 50,
    fontFamily: 'Poppins',
  },

  text: {
    color: '#484848',
    fontFamily: 'Poppins',
  },

  view2b: {
    width: '100%',
    gap: 20,
    // backgroundColor: 'pink',
  },

  mail: {
    borderRadius: 50,
    width: '100%',
    fontFamily: 'Poppins',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%',
  },

  psw: {
    borderRadius: 50,
    width: '100%',
    fontFamily: 'Poppins',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%',
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  img: {
    top: 15,
    paddingRight: '5%',
  },

  forget: {
    textAlign: 'right',
    color: 'black',
    fontFamily: 'Poppins',
    color: '#556B2F',
  },

  view3: {
    flex: 0.25,
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
  },

  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#001965',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  btnText: {
    color: '#FFFFFF',
  },

  info: {
    paddingTop: 20,
  },

  info1: {
    alignSelf: 'center',
    fontFamily: 'Poppins',
    color: '#001965',
  },

  signUp: {
    color: '#4FA8D8',
  },
});
