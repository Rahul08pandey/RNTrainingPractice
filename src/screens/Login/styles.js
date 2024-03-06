import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  loginContainer: {
    marginTop: '-12%',
    margin: moderateScale(15),
    padding: moderateScale(20),
    backgroundColor: '#fff',
    shadowColor: '#00000040',
    // shadowOffset: {width: 0, height: 2},
    shadowOpacity: moderateScale(0.8),
    shadowRadius: moderateScale(2),
    borderRadius: moderateScale(20),
    elevation: moderateScale(5),
  },

  loginHeading: {
    fontSize: moderateScale(30),
    color: '#000000',
    marginBottom: moderateScale(20),
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginBottom: moderateScale(15),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  inputTxt: {
    flexDirection: 'row',
    borderWidth: moderateScale(0.2),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  txtInput: {
    width: '100%',
    color: '#000000',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(0.2),
  },

  txtInput1: {
    color: '#000000',
    paddingLeft: moderateScale(10),
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
  },

  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnTxt: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});
