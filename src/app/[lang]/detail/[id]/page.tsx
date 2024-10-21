"use client";
import PokemonInformation from "@/app/components/PokemonInformation";
import Evolution from "@/app/features/Detail/Evolution";
import OtherImage from "@/app/features/Detail/OtherImage";
import Stats from "@/app/features/Detail/Stats";
import { PokemonAPIResponse } from "@/app/type/pokemon.type";
import { getPokemonEvolutionChain } from "@/app/utils/evolution.api";
import { getPokemonDetail } from "@/app/utils/pokemon.api";
import { Box } from "@mui/material";
import React from "react";

const DetailPage = ({ params }: any) => {
  const { id, lang } = params;
  const [pokemonData, setPokemonData] = React.useState<PokemonAPIResponse>();
  const [evolutionData, setEvolutionData] = React.useState<
    PokemonAPIResponse[]
  >([]);
  React.useEffect(() => {
    const fetchingData = async () => {
      const pokemonDetail = await getPokemonDetail(id);
      const pokemonEvolutionChain = await getPokemonEvolutionChain(id);
      setEvolutionData(pokemonEvolutionChain || []);
      setPokemonData(pokemonDetail?.data);
    };
    fetchingData();
  }, [id]);

  return (
    <>
      <Box padding="80px 140px">
        <PokemonInformation
          imageSrc={
            pokemonData?.sprites?.other?.dream_world?.front_default || ""
          }
          name={pokemonData?.name}
          abilities={pokemonData?.abilities}
          height={pokemonData?.height}
          weight={pokemonData?.weight}
          id={pokemonData?.id}
          type={pokemonData?.types}
        />
        <OtherImage images={pokemonData?.sprites} />
        <Stats status={pokemonData?.stats} />
        <Evolution evolutionData={evolutionData} />
      </Box>
    </>
  );
};

export default DetailPage;
