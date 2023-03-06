import { render } from '@testing-library/react-native';
import { ThemeProvider } from '~/theme';

export const renderWithTheme = (children: any) =>
  render(<ThemeProvider>{children}</ThemeProvider>);
