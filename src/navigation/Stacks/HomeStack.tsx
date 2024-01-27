import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/home.screen';
import AdDetails from '../../screens/AdDetails/addetails.screen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='AdDetails' component={AdDetails} />
    </Stack.Navigator>
  );
}
