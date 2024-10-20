"use client";
import PokemonInformation from "@/app/components/PokemonInformation";
import MainLayout from "@/app/layouts";
import { Box } from "@mui/material";
import React from "react";
import OtherImage from "./OtherImage";
import Stats from "./Stats";
import Evolution from "./Evolution";

const DetailPage = () => {
  return (
    <MainLayout>
      <Box padding="80px 140px">
        <PokemonInformation />
        <OtherImage />
        <Stats />
        <Evolution />
      </Box>
    </MainLayout>
  );
};

export default DetailPage;
