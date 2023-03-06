import { Cat, CatFromApi } from '../../utils/types';

export interface ICatMapper {
  mapCatsFromApiToStore(cats: CatFromApi[]): Promise<Cat[]>;
}
