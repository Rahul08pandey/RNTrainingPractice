import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted to align text to the left
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 20, // Added paddingLeft to give some space on the left
  },

  headContainer: {
    justifyContent: 'center',
  },

  headerTxt: {
    fontSize: 20,
    color: '#ffffff',
    marginLeft: 20,
    fontFamily: 'Nunito-Medium',
  },

  imgContainer: {
    flex: 1,
    marginRight: 40,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 152,
    height: 64,
    alignSelf: 'center',
  },
});
