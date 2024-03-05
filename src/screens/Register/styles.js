import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  registerContainer: {
    margin: moderateScale(15),
    top: '-7%',
    padding: moderateScale(20),
    backgroundColor: '#fff',
    shadowColor: '#00000040',
    // shadowOffset: {width: 0, height: 2},
    elevation: moderateScale(5),
    shadowRadius: moderateScale(2),
    borderRadius: moderateScale(20),
    shadowOpacity: moderateScale(0.8),
    // backgroundColor: 'gray',
  },

  inputContainer: {
    marginBottom: moderateScale(10),
  },

  passwordContainer: {
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    borderWidth: moderateScale(0.2),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.2),
    paddingLeft: moderateScale(10),
  },

  passwordTxtInput: {
    paddingLeft: moderateScale(10),
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
  },

  registerBtn: {
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  registerBtnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },

  alreadyBtn: {
    marginTop: moderateScale(20),
  },

  alreadyTxt: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
});
