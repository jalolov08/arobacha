import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputCont: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: colors.blue,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:'center',
  },
  input:{
    width: '100%',
    textAlign:'left',
    fontSize:16,
    color:colors.black
  },
  text:{
    fontSize:16,
    color:colors.dark,
    marginRight:10
  }
});
