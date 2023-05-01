import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../contexts/theme/ThemeContext';
import {Title} from '../components/Title';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme} = useContext(ThemeContext);

  return (
    <View >
      <Title title="Switchs" />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLightTheme}
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
          <Text style={{fontSize: 18, color: 'white'}}>Light</Text>
        </TouchableOpacity>
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
          <Text style={{fontSize: 18, color: 'white'}}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
