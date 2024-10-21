import { AxiosResponse } from "axios";
import { PokemonAPIResponse, PokemonListResponse } from "../type/pokemon.type";
import AxiosInstance from "./api";
import { APIResponse } from "../type/global.type";
import { PokemonTypeDetailResponse } from "../type/pokemon-type.type";

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
    const promises = pokemonList?.data?.results?.map((result) => {
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

export const getListPokemonByType = async ({
  limitPage = 9,
  pageNumber = 1,
  id,
}: {
  limitPage?: number;
  pageNumber?: number;
  id: number;
}) => {
  try {
    const startPage = (pageNumber - 1) * limitPage;
    const endPage = startPage + limitPage;

    const pokemonType: APIResponse<PokemonTypeDetailResponse> =
      await AxiosInstance.get(`/type/${id}`);
    const promises = pokemonType?.data?.pokemon
      ?.slice(startPage, endPage)
      .map((result) => {
        return AxiosInstance.get(result.pokemon.url);
      });
    const allPokemonResult: AxiosResponse<PokemonAPIResponse>[] =
      await Promise.all(promises);
    const allPokemonData: PokemonAPIResponse[] = allPokemonResult?.map(
      (value) => value.data
    );

    return { pokemonType: pokemonType, allPokemonData: allPokemonData };
  } catch (error) {
    console.log(error);
  }
};
