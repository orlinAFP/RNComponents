import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {StackNavigation} from './src/navigation/StackNavigator';
import {ThemeContextProvider} from './src/contexts/theme/ThemeContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const App = (): JSX.Element => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default App;
