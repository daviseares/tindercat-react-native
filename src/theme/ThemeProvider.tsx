import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '~/modules';
import colors from './colors';
import fontsVariant from './fonts';

const theme = { colors, fontsVariant };
export type ThemeType = typeof theme;

const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
