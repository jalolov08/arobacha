import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  selectCont: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#676767',
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Manrope-Medium',
  },
  logo:{
    width:40,
    height:40
  }
});
