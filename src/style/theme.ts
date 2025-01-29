export const colors = {
  primary_500: '#7E5CAD',
  primary: '#A294F9',
  secondary: '#CDC1FF',
  third: '#E5D9F2',
  background: '#F5EFFF',
  text: '#202124',
  white: '#ffffff',
  pink: '#F6D6D6',
  yellow: '#F6F7C4',
  green: '#A1EEBD',
  accent: '#7BD3EA',
  black: '#111111',
};

const theme = {
  colors,
} as const;

export type ThemeType = typeof theme;

export default theme;
