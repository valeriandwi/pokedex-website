export type PokemonTypeResult = {
  name: string;
  url: string;
};

export type PokemonTypeResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonTypeResult[];
};

export type PokemonByType = {
  slot: string;
  pokemon: {
    name: string;
    url: string;
  };
};

export type PokemonTypeDetailResponse = {
  id: string;
  name: string;
  pokemon: PokemonByType[];
  [key: string]: any;
};
