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

  profileTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  profileContainer: {
    width: moderateScale(90),
    height: moderateScale(90),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.2),
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },

  icon: {
    position: 'absolute',
    alignSelf: 'center',
  },

  inputContainer: {
    marginTop: moderateScale(10),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(0.2),
    marginBottom: moderateScale(10),
  },

  dobView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(5),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.2),
  },

  img: {
    marginRight: moderateScale(10),
  },

  updateBtn: {
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  updateBtnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
