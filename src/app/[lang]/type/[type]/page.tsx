import MainLayout from "@/app/layouts";
import { Box } from "@mui/material";
import React from "react";
import Navigation from "../Navigation";
import PokemonList from "../PokemonList";

const PokemonType = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default PokemonType;
