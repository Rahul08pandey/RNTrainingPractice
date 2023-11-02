import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImg: {
    flex: 1,
    width: '100%',
  },

  heading: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },

  hText: {
    color: 'blue',
    fontSize: 42,
    fontWeight: 'bold',
  },

  subContainer: {
    flex: 0.7,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  input: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'brown',
  },

  name: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingLeft: '2%',
  },

  mail: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingLeft: '2%',
  },

  country: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    // backgroundColor: 'yellow',
  },

  radio: {
    flex: 0.1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  //   dob: {
  //     flex: 0.1,
  //     backgroundColor: 'grey',
  //   },

  psw: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'black',
  },

  pswText: {
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#d3d3d3',
    paddingLeft: '2%',
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  confirmPswText: {
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#d3d3d3',
    paddingLeft: '2%',
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  logo: {
    top: 10,
    paddingRight: '5%',
  },

  checkbox: {
    alignSelf: 'center',
  },

  register: {
    flex: 0.1,
    width: '50%',
    alignSelf: 'center',
  },

  register1: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
});
