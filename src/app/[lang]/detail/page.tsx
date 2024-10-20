"use client";
import PokemonInformation from "@/app/components/PokemonInformation";
import Evolution from "@/app/features/Detail/Evolution";
import OtherImage from "@/app/features/Detail/OtherImage";
import Stats from "@/app/features/Detail/Stats";
import MainLayout from "@/app/layouts";
import { Box } from "@mui/material";
import React from "react";

const DetailPage = () => {
  return (
    <>
      <Box padding="80px 140px">
        <PokemonInformation />
        <OtherImage />
        <Stats />
        <Evolution />
      </Box>
    </>
  );
};

export default DetailPage;
