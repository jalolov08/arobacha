import {colors} from '../../constants/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    padding: 20,
    paddingBottom:0
  },
  title: {
    color: colors.blue,
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
    marginTop: 30,
  },
  priceFavCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  price: {
    fontSize: 16,
    color: colors.dark,
    fontFamily: 'Manrope-SemiBold',
  },
  imageScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    marginRight: 1,
    backgroundColor: colors.grayLight,
  },
  firstImage: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  fullWidthImage: {
    width: width * 0.9,
    borderRadius: 5,
    margin:0
  },
  dateCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Manrope-Meduim',
    color: colors.dark,
  },
  views: {
    fontSize: 12,
    fontFamily: 'Manrope-Meduim',
    color: colors.dark,
    marginLeft: 5,
  },
  stats: {
    fontSize: 24,
    color: colors.black,
    fontFamily: 'Manrope-Meduim',
  },
  statListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:5,
    borderBottomWidth:1,
    borderBottomColor:colors.grayLight
  },
  statLabel: {
    fontSize: 15,
    fontFamily: 'Manrope-SemiBold',
    color: colors.black,
  },
  stat: {
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
    color: colors.dark,
  },
  description:{
    fontSize:12,
    color:colors.black,
    fontFamily: 'Manrope-Medium',
    marginTop:25
  },
  ownerCont:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:30
  },
  ownerPhoto:{
    width:44,
    height:44,
    borderRadius:22,
    backgroundColor:colors.grayLight
  },
  ownerName:{
    fontSize:14,
    fontFamily: 'Manrope-Medium',
    color:colors.black,
    marginLeft:20
  },
  ownerAdsCount:{
    fontSize:8,
    fontFamily: 'Manrope-Medium',
    color:colors.dark,
    marginLeft:20

  }
});
