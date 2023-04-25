import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/HomeScreen';
import { Animation100Screen } from '../screen/Animation100Screen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { SwitchScreen } from '../screen/SwitchScreen';

export type StackParams = {
  HomeScreen: undefined;
  Animation100Screen:undefined;
  Animation101Screen:undefined;
  SwitchScreen:undefined;
};
const Stack = createStackNavigator<StackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation100Screen" component={Animation100Screen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
    </Stack.Navigator>
  );
};
