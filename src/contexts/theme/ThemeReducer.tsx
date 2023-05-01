import {Theme} from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}
type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'green',
  dark: false,
  colors: {
    primary: 'red',
    background: 'white',
    card: 'blue',
    text: 'black',
    border: 'gray',
    notification: 'gray',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'green',
  dark: true,
  colors: {
    primary: 'red',
    background: 'black',
    card: 'blue',
    text: 'white',
    border: 'gray',
    notification: 'gray',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
