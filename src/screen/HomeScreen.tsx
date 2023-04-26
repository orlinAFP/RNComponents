import React from 'react';
import {View, Text} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const menuItems = [
  {
    name: 'Animation 100',
    icon: 'airplane-outline',
    components: 'Animation100Screen',
  },
  {
    name: 'Animation 101',
    icon: 'alarm-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Switchs',
    icon: 'toggle-outline',
    components: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    components: 'AlertScreen',
  },
  {
    name: 'Inputs',
    icon: 'document-text-outline',
    components: 'InputScreen',
  },
  {
    name: 'Refresh',
    icon: 'refresh-outline',
    components: 'PullToRefreshScreen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{flex:1, marginTop: top + 10, ...styles.marginGlobal, }}>
      <FlatListMenuItem data={menuItems} />
    </View>
  );
};
