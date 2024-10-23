import HomeContent from "@/app/features/HomePage/HomeContent";
import PokeDex from "@/app/features/HomePage/PokeDex";
import React from "react";
import { DEFAULT_PER_PAGE_NUMBER } from "../constants/constants";

const HomePage = async (props: {
  searchParams: {
    page?: string;
    pageSize?: string;
  };
}) => {
  const searchParams = props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.pageSize) || DEFAULT_PER_PAGE_NUMBER;

  return (
    <>
      <HomeContent />
      <PokeDex currentPage={currentPage} pageSize={pageSize} />
    </>
  );
};

export default HomePage;
