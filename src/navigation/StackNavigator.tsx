import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { Animation100Screen } from '../screen/Animation100Screen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { SwitchScreen } from '../screen/SwitchScreen';
import { AlertScreen } from '../screen/AlertScreen';
import { InputScreen } from '../screen/InputScreen';
import { PullToRefreshScreen } from '../screen/PullToRefreshScreen';
import { SectionListScreen } from '../screen/SectionListScreen';
import { ModalScreen } from '../screen/ModalScreen';
import { InfinityScrollScreen } from '../screen/InfinityScrollScreen';

export type StackParams = {
  HomeScreen: undefined;
  Animation100Screen: undefined;
  Animation101Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  InputScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
  modalScreen: undefined;
  InfinityScrollScreen: undefined;
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
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="modalScreen" component={ModalScreen} />
      <Stack.Screen name="InfinityScrollScreen" component={InfinityScrollScreen} />
    </Stack.Navigator>
  );
};
