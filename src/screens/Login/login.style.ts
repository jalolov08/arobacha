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
  },
  loginErrorText:{
    fontSize:12,
    color:colors.red,
    fontWeight:'500'

  },
  forgot:{
    fontSize:12,
    color:colors.black,
    fontWeight:'500'
  },
  textsCont:{
flexDirection:"row",
justifyContent:'space-between',
flexWrap:'wrap',
paddingTop:16
  }
});
