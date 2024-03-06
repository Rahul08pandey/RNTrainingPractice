import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: moderateScale(20),
  },

  quesTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: moderateScale(10),
  },

  txtInputContainer: {
    marginBottom: moderateScale(10),
  },

  inputTxt: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    color: '#000000',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  dropDown: {
    height: moderateScale(50),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  helpTxt: {
    fontSize: moderateScale(16),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },
});
