import { renderWithTheme } from '~/utils';
import ProfileScreen from './index';

test('should be able to render ProfileScreen', () => {
  renderWithTheme(<ProfileScreen />);
});
