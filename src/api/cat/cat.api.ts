import { ResponseError } from '~/utils';
import {
  CatFromApi,
  CatImageFromApi,
  CatVoteApiParams,
  CatVoteFromApi,
} from '~/utils/types';
import request from '../request';
import { ICatApi } from './cat.interface';

export default class CatApi implements ICatApi {
  postVote = async ({
    image_id,
    value,
  }: CatVoteApiParams): Promise<CatVoteFromApi> => {
    try {
      const response = await request.post('/votes', { image_id, value });

      return response.data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getCats = async (page = 0): Promise<CatFromApi[]> => {
    try {
      const response = await request.get(
        `/breeds?limit=10&page=${page}&order=ASC`,
      );

      return response.data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getImage = async (id: string): Promise<CatImageFromApi> => {
    try {
      const image_id = id || 'MjAzMDMwMg';
      const response = await request.get(`/images/${image_id}`);

      return response.data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}
