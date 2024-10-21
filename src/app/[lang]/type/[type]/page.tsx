import { TYPE_COLOR } from "@/app/constants/constants";
import TypeBackground from "@/app/features/Type/Background";
import Navigation from "@/app/features/Type/Navigation";
import PokemonList from "@/app/features/Type/PokemonList";
import { Box } from "@mui/material";
import React from "react";

const PokemonType = ({ params }: { params: { type: string } }) => {
  const { type } = params;

  return (
    <>
      <Box
        minHeight="1814px"
        display="flex"
        padding="80px 0"
        justifyContent="center"
      >
        <Box padding="0 140px" display="flex" flexDirection="row" gap="57px">
          <Navigation selectedType={type} />
          <PokemonList id={type} />
        </Box>
        <Box position="absolute" zIndex="-999">
          <TypeBackground iconColor={TYPE_COLOR[Number(type) - 1]} />
        </Box>
      </Box>
    </>
  );
};

export default PokemonType;
