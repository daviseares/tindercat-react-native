import { renderWithTheme } from '~/utils';
import Loading from './index';

test('should be able to render Loading component', () => {
  renderWithTheme(<Loading />);
});
