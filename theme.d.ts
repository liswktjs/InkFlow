import '@emotion/react';
import { ThemeType } from './src/style/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
