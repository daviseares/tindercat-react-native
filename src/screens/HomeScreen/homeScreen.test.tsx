import { renderWithTheme } from '~/utils';
import { HomeScreen } from '../index';

describe('HomeScreen', () => {
  it('should be able to render HomeScreen', () => {
    renderWithTheme(<HomeScreen />);
  });
});
