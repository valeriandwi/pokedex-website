import HomeContent from "@/app/features/HomePage/HomeContent";
import PokeDex from "@/app/features/HomePage/PokeDex";
import React from "react";

const HomePage = async () => {
  return (
    <>
      <HomeContent />
      <PokeDex />
    </>
  );
};

export default HomePage;
