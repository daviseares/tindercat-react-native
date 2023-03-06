import { renderWithTheme } from '~/utils';
import { Card } from './index';

test('should be able to render Card Component', () => {
  renderWithTheme(
    <Card
      affection_level={5}
      name="Abyssinian"
      origin="Egypt"
      image_url="https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
    />,
  );
});
