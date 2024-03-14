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

  heading: {
    fontSize: moderateScale(22),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  selectDateContainer: {
    marginVertical: moderateScale(10),
    // backgroundColor: 'green',
  },

  subContainerText: {
    color: '#0A4975',
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },

  itemsContainer: {
    marginBottom: moderateScale(10),
    borderBottomWidth: moderateScale(0.2),
    backgroundColor: '#fff',
  },

  topicTxt: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(5),
    color: 'rgba(10, 73, 117, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
  },

  typeTxt: {
    fontSize: moderateScale(16),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  imgTxt: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(5),
    color: 'rgba(0, 0, 0, 0.66)',
    fontFamily: 'Nunito-Regular',
  },

  descriptionTxt: {
    color: '#000000A8',
    color: 'rgba(0,0,0,0.66)',
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
    fontFamily: 'Nunito-Regular',
  },

  subContainerMeetingText: {
    fontSize: moderateScale(14),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  url: {
    marginLeft: 5,
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 10, 255, 0.66)',
    textDecorationLine: 'underline',
  },

  selectDateText: {
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 0, 0, 0.66)',
  },

  pdfTxt: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(5),
    color: '#000000',
    marginBottom: moderateScale(10),
    fontFamily: 'Nunito-Medium',
  },
});
