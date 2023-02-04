import {
  CatFromApi,
  CatImageFromApi,
  CatVoteApiParams,
  CatVoteFromApi,
} from '../../utils/types';

export interface ICatApi {
  getCats: (page?: number) => Promise<CatFromApi[]>;
  getImage: (id: string) => Promise<CatImageFromApi>;
  postVote: ({ image_id, value }: CatVoteApiParams) => Promise<CatVoteFromApi>;
}
