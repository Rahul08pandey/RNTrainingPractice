import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
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
    fontSize: 35,
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
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingLeft: 5,
  },

  mail: {
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingLeft: 5,
  },

  country: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    // backgroundColor: 'yellow',
  },

  countries: {
    width: '50%'
  },

  radio: {
    flex: 0.1,
    width: '80%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  psw: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'black',
  },

  img: {
    top: 15,
    paddingRight: '5%',
  },

  pswText: {
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#808080',
    paddingLeft: 5,
    flexDirection: 'row', //for eye icon(img)
    justifyContent: 'space-between', //for eye icon(img)
  },

  confirmPswText: {
    width: '100%',
    borderRadius: 50,
    // backgroundColor: '#d3d3d3',
    backgroundColor: '#808080',
    paddingLeft: 5,
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
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
});
