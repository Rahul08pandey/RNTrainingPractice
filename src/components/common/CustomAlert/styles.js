import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    width: '90%',
    backgroundColor: 'white',
    shadowColor: '#000000400',
    padding: moderateScale(30),
    elevation: moderateScale(5),
    shadowRadius: moderateScale(4),
    borderRadius: moderateScale(15),
    shadowOpacity: moderateScale(0.25),
  },

  titleTxt: {
    color: '#000000',
    alignSelf: 'flex-start',
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
    marginBottom: moderateScale(10),
  },

  popupTxt: {
    fontSize: moderateScale(19),
    color: '#000000A8',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Regular',
  },
});
