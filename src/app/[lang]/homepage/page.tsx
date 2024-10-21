import HomeContent from "@/app/features/HomePage/HomeContent";
import PokeDex from "@/app/features/HomePage/PokeDex";
import React from "react";

const HomePage = async ({ params }: any) => {
  return (
    <>
      <HomeContent />
      <PokeDex />
    </>
  );
};

export default HomePage;
