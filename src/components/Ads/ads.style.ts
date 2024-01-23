import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom:50
  },
  adCont: {
    flex: 1,
    marginVertical: 16,
  },

  adTitle: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
    fontFamily: 'Manrope-Bold',
  },
  adPrice: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Manrope-SemiBold',
  },
  adCity: {
    fontSize: 10,
    color: colors.dark,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  retryBtn: {
    width: 100,
    height: 30,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  retryText: {
    color: colors.white,
    fontWeight: '600',
  },
});
