import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:5
  },
  adCont: {
    flex: 1,
    marginVertical:16
  },

  adTitle: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  adPrice: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '500',
  },
  adCity: {
    fontSize: 10,
    color: colors.darkLight,
    fontWeight: '400',
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
