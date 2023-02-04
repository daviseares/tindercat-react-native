type VoteValue = 1 | 0;

export type CatVoteApiParams = {
  image_id: string;
  value: VoteValue;
};

export type CatVoteFromApi = {
  message: string;
  id: number;
  image_id: string;
  value: number;
  country_code: string;
};

type Weight = {
  imperial: string;
  metric: string;
};
export type CatFromApi = {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
};

export type CatImageFromApi = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Cat = {
  id: string;
  name: string;
  origin: string;
  affection_level: number;
  image_url: string;
  image_id: string;
};

export type CatImage = {
  id: string;
  url: string;
};
