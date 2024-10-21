import { APIResponse } from "../type/global.type";
import { PokemonTypeResponse } from "../type/pokemon-type.type";
import AxiosInstance from "./api";

export const getPokemonType = async () => {
  try {
    const result: APIResponse<PokemonTypeResponse> = await AxiosInstance.get(
      `/type`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
