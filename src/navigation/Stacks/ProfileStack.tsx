import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile/profile.screen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Profile} />
    </Stack.Navigator>
  );
}
