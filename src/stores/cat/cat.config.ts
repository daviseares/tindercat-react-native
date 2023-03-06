import { Cat, CatVoteApiParams } from '../../utils/types/cat.types.';

type InitialStateProps = {
  cats: Cat[];
};

export const initialState: InitialStateProps = {
  cats: [],
};

export interface ICatStore {
  cats: Cat[];
  getCats(page?: number): Promise<void>;
  setVote(params: CatVoteApiParams): Promise<void>;
  clearCats(): void;
}
