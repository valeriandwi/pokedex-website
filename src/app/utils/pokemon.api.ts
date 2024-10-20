import { AxiosResponse } from "axios";
import { PokemonAPIResponse, PokemonListResponse } from "../type/pokemon.type";
import AxiosInstance from "./api";
import { APIResponse } from "../type/global.type";

export const getListPokemon = async ({
  limitPage,
  pageNumber,
}: {
  limitPage: number;
  pageNumber: number;
}): Promise<
  | {
      pokemonList: PokemonListResponse | undefined;
      allPokemonInformation: PokemonAPIResponse[];
    }
  | undefined
> => {
  try {
    const pokemonList: APIResponse<PokemonListResponse> =
      await AxiosInstance.get(
        `/pokemon?limit=${limitPage}&offset=${limitPage * (pageNumber - 1)}`
      );
    let promises = pokemonList?.data?.results?.map((result) => {
      return AxiosInstance.get(result.url);
    });
    const allPokemonResult: AxiosResponse<PokemonAPIResponse>[] =
      await Promise.all(promises);

    const allPokemonInformation: PokemonAPIResponse[] = allPokemonResult.map(
      (response) => response.data
    );
    return { pokemonList: pokemonList?.data, allPokemonInformation };
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetail = async (id: number) => {
  try {
    const result: APIResponse<PokemonAPIResponse> = await AxiosInstance.get(
      `/pokemon/${id}`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
