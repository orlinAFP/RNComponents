import React, {createContext, useState} from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as any);

export const ThemeContextProvider = ({children}: any) => {
  const theme = {};

  const setDarkTheme = () => {
    console.log('chage theme');
  };
  const setLightTheme = () => {
    console.log('chage theme 2');
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
