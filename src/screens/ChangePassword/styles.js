import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  changePassTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },

  passTxt: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(15),
    color: 'rgba(0, 0, 0, 0.66)',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    color: '#000000',
    marginTop: moderateScale(10),
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },
});
