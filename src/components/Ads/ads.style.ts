import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    flex:1
  },
  adCont: {
    flex: 1,
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
});
