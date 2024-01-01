import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAds from '../../screens/CreateAds/createads.screen';

const Stack = createNativeStackNavigator();

export default function CreateAdsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={CreateAds} />
    </Stack.Navigator>
  );
}
