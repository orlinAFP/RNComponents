import React, {createContext, useEffect, useReducer, useState} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './ThemeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as any);

export const ThemeContextProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    if (colorScheme === 'dark') setDarkTheme();
    if (colorScheme === 'light') setLightTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
