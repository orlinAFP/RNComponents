import React, { useContext } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { ThemeContext } from '../contexts/theme/ThemeContext';

export const ChangeThemeScreen = () => {
const {setDarkTheme} = useContext(ThemeContext);

  return (
    <View>
      <TouchableOpacity
      onPress={setDarkTheme}
        style={{
          flexDirection: 'row',
          height: 40,
          width: 100,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        activeOpacity={0.7}>
        <Text style={{fontSize: 18, color: 'white'}}>Dark / Light</Text>
      </TouchableOpacity>
    </View>
  );
};
