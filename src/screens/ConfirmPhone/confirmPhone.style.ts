import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  handPhone:{
    width: 220,
    height: 220,
    marginVertical:30,
    resizeMode:'contain'
  },
  confirmText:{
    fontSize:20,
    color:colors.black,
    fontWeight:'400',
    lineHeight:28
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  focusCell: {
    borderColor: '#007AFF',
  },
});
