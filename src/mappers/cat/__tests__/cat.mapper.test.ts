import { breeds } from '~/utils';
import { CatMapper } from '../cat.mapper';

const catMapper = new CatMapper();

test('should be able to map breeds from api', async () => {
  const mappedBreeds = await catMapper.mapCatsFromApiToStore(breeds);

  expect(mappedBreeds).toEqual([
    {
      id: 'raga',
      name: 'Ragamuffin',
      origin: 'United States',
      affection_level: 5,
      image_id: 'SMuZx-bFM',
      image_url: 'https://cdn2.thecatapi.com/images/SMuZx-bFM.jpg',
    },
  ]);
});
