import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  txtInput: {
    flex: 1,
    color: '#000000',
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  sendBtn: {
    position: 'absolute',
    right: 15,
  },

  myMsgContainer: {
    marginBottom: moderateScale(10),
    alignItems: 'flex-end',
  },

  otherMsgContainer: {
    marginBottom: moderateScale(10),
    alignItems: 'flex-start',
  },

  myTxtContainer: {
    padding: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(10, 73, 117, 0.1)',
  },

  otherTxtContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(218, 218, 218, 0.38)',
  },

  message: {
    fontSize: moderateScale(18),
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Nunito-Regular',
  },

  timestamp: {
    fontSize: moderateScale(14),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },
});
