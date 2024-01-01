import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../../screens/Chat/chat.screen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Chat} />
    </Stack.Navigator>
  );
}
