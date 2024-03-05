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
    padding: moderateScale(25),
    borderRadius: moderateScale(15),
    shadowColor: '#000000400',
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(4),
    elevation: moderateScale(5),
    backgroundColor: 'white',
  },

  titleTxt: {
    fontSize: moderateScale(30),
    marginBottom: moderateScale(10),
    color: '#000000',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-SemiBold',
  },

  popupTxt: {
    fontSize: moderateScale(19),
    color: '#000000A8',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Regular',
  },
});
