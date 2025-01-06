export const colors = {
  primary: '#8A2BE2',
  secondary: '#FFB6C1',
  background: '#FDF5E6',
  text: '#202124',
  accent: '#48D1CC',
};

const theme = {
  colors,
} as const;

export type ThemeType = typeof theme;

export default theme;
