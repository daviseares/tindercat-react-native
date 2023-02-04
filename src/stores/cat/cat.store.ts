import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { catApi } from '../../api';
import { catMapper } from '../../mappers';
import { CatVoteApiParams } from '../../utils/types';

import { ICatStore, initialState } from './cat.config';

export const catStore = combine({ ...initialState }, (set) => ({
  getCats: async (page: number): Promise<void> => {
    const catsFromApi = await catApi.getCats(page);
    const catsMapped = await catMapper.mapCatsFromApiToStore(catsFromApi);

    set({ cats: catsMapped });
  },

  setVote: async (params: CatVoteApiParams): Promise<void> => {
    await catApi.postVote(params);
  },

  clearCats: (): void => {
    set(initialState);
  },
}));

export const useCatStore = create<ICatStore>()(catStore);
