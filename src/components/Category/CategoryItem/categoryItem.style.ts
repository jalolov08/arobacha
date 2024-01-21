import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '48%',
    height: 68,
    backgroundColor: colors.grayLight,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryPhoto: {
    width: 75,
    height: 45,
  },
  categoryText: {
    fontSize: 10,
    color: colors.dark,
    fontFamily:'Manrope-Bold'
  },
});
