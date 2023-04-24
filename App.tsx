import 'react-native-gesture-handler';
import React from 'react';
import { HomeScreen } from './src/screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>    
  );
};

export default App;
