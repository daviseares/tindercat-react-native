import { catApi } from '../../api';
import { Cat, CatFromApi } from '../../utils/types';
import { ICatMapper } from './cat.mapper.interface';

export class CatMapper implements ICatMapper {
  async mapCatsFromApiToStore(cats: CatFromApi[]): Promise<Cat[]> {
    return Promise.all(
      cats.map(async (cat) => ({
        id: cat.id,
        name: cat.name,
        origin: cat.origin,
        affection_level: cat.affection_level,
        image_id: cat.reference_image_id,
        image_url: (await catApi.getImage(cat?.reference_image_id)).url,
      })),
    );
  }
}
