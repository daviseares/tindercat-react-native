import { renderWithTheme } from '~/utils';
import ChatScreen from './index';

test('should be able to render ChatScreen', () => {
  renderWithTheme(<ChatScreen />);
});
