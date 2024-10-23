import { DEFAULT_PER_PAGE_NUMBER, TYPE_COLOR } from "@/app/constants/constants";
import TypeBackground from "@/app/features/Type/Background";
import Navigation from "@/app/features/Type/Navigation";
import PokemonList from "@/app/features/Type/PokemonList";
import { Box } from "@mui/material";
import React from "react";

const PokemonType = (props: {
  params: {
    lang: string;
    type: string;
  };
  searchParams: {
    page?: string;
    pageSize?: string;
  };
}) => {
  const { type } = props.params;
  const { page, pageSize } = props.searchParams;
  const currentType = type?.toString() || "1";
  const currentPage = Number(page) || 1;
  const currentPageSize = Number(pageSize) || DEFAULT_PER_PAGE_NUMBER;

  return (
    <>
      <Box
        minHeight="1814px"
        display="flex"
        padding="80px 0"
        justifyContent="center"
      >
        <Box padding="0 140px" display="flex" flexDirection="row" gap="57px">
          <Navigation selectedType={currentType} />
          <PokemonList
            id={currentType}
            page={currentPage}
            pageSize={currentPageSize}
          />
        </Box>
        <Box position="absolute" zIndex="-999">
          <TypeBackground iconColor={TYPE_COLOR[Number(type) - 1]} />
        </Box>
      </Box>
    </>
  );
};

export default PokemonType;
