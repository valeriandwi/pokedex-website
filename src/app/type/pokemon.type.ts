export type PokemonList = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonList[];
};

export type PokemonAPIResponse = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Resource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
  cries: Cries;
};

export type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: Resource;
};

type Form = Resource;

type GameIndex = {
  game_index: number;
  version: Resource;
};

type HeldItem = {
  item: Resource;
  version_details: VersionDetail[];
};

type VersionDetail = {
  rarity: number;
  version: Resource;
};

type Move = {
  move: Resource;
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: number;
  version_group: Resource;
  move_learn_method: Resource;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Resource;
};

export type Type = {
  slot: number;
  type: Resource;
};

type PastType = {
  generation: Resource;
  types: Type[];
};

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: {
    dream_world?: SpriteVariant;
    home?: SpriteVariant;
    "official-artwork"?: SpriteVariant;
    showdown?: SpriteVariant;
  };
  versions?: {
    [key: string]: { [key: string]: SpriteVariant };
  };
};

type SpriteVariant = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
};

type Cries = {
  latest: string;
  legacy: string;
};

type Resource = {
  name: string;
  url: string;
};
