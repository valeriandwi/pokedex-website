import { EvolutionResponse } from "../type/evolution.type";
import { APIResponse } from "../type/global.type";
import { PokemonAPIResponse } from "../type/pokemon.type";
import { SpeciesResponse } from "../type/species.type";
import AxiosInstance from "./api";

export const getPokemonEvolutionChain = async (id: number) => {
  try {
    const species: APIResponse<SpeciesResponse> = await AxiosInstance.get(
      `/pokemon-species/${id}`
    );
    const evolutionChain: APIResponse<EvolutionResponse> =
      await AxiosInstance.get(species.data.evolution_chain.url);
    const promises = await Promise.all([
      AxiosInstance.get(
        `/pokemon/${evolutionChain?.data?.chain?.species?.name}`
      ),
      AxiosInstance.get(
        `/pokemon/${evolutionChain?.data?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name}`
      ),
      AxiosInstance.get(
        `/pokemon/${evolutionChain?.data?.chain?.evolves_to[0]?.species?.name}`
      ),
    ]);
    const result: PokemonAPIResponse[] = promises.map((value) => value.data);
    return result;
  } catch (error) {
    console.log(error);
  }
};
