import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../../screens/Favorites/favorites.screen';

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}
