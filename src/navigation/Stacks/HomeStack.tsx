import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/home.screen';
import AdDetails from '../../screens/AdDetails/addetails.screen';
import Category from '../../screens/Category/category.screen';
import SelectBrand from '../../screens/SelectBrand/selectBrand.screen';
import SelecModel from '../../screens/SelectModel/selectModel.screen';
import SelectCity from '../../screens/SelectCity/selectCity.component';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='AdDetails' component={AdDetails} />
      <Stack.Screen name='Category' component={Category} />
      <Stack.Screen name='SelectBrand' component={SelectBrand} />
      <Stack.Screen name='SelectModel' component={SelecModel} />
      <Stack.Screen name='SelectCity' component={SelectCity} />

    </Stack.Navigator>
  );
}
