import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
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
  title:{
    fontSize:20,
    color:colors.black,
    fontFamily: 'Manrope-SemiBold',

  }
});
