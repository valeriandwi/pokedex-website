import Navigation from "@/app/features/Type/Navigation";
import PokemonList from "@/app/features/Type/PokemonList";
import MainLayout from "@/app/layouts";
import { Box } from "@mui/material";
import React from "react";

const PokemonType = () => {
  return (
    <>
      <Box
        padding="80px 140px"
        minHeight="1814px"
        sx={{
          background: "url(/background-type.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        flexDirection="row"
        gap="57px"
      >
        <Navigation />
        <PokemonList />
      </Box>
    </>
  );
};

export default PokemonType;
