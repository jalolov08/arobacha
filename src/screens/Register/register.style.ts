import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  loginTitle: {
    fontSize: 36,
    textAlign: 'center',
    color: colors.blue,
    fontWeight: '500',
    marginVertical: '20%',
    fontFamily: 'Manrope-SemiBold',
  },
  loginErrorText: {
    fontSize: 12,
    color: colors.red,
    fontWeight: '500',
    marginTop: 20,
    fontFamily: 'Manrope-SemiBold',
  },
});
