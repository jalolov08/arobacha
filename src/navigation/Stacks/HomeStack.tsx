import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/home.screen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  );
}
