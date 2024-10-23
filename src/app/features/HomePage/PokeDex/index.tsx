"use client";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import PokeModal from "../Modal";
import Header from "./Header";
import PokeCard from "./Card";
import { getListPokemon } from "@/app/utils/pokemon.api";
import {
  PokemonAPIResponse,
  PokemonListResponse,
} from "@/app/type/pokemon.type";
import useModal from "@/app/hooks/useModal";
import AppPagination from "@/app/components/AppPagination";
import useThemeStore from "@/app/store/theme";

interface PokeDexProps {
  currentPage: number;
  pageSize: number;
}

const PokeDex: React.FC<PokeDexProps> = ({ currentPage, pageSize }) => {
  const {
    open: openModal,
    setOpen: setOpenModal,
    setModalData,
    modalData,
  } = useModal<PokemonAPIResponse>();
  const { resetTheme } = useThemeStore();

  const [tableData, setTableData] = React.useState<
    PokemonListResponse | undefined
  >();
  const [pokemonData, setPokemonData] = React.useState<PokemonAPIResponse[]>(
    []
  );

  React.useEffect(() => {
    resetTheme();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getListPokemon({
        limitPage: pageSize,
        pageNumber: currentPage,
      });
      setTableData(result?.pokemonList);
      setPokemonData(result?.allPokemonInformation as PokemonAPIResponse[]);
    };
    fetchData();
  }, [pageSize, currentPage]);

  return (
    <section id="pokedex">
      <Box
        bgcolor={"#FFCB3B"}
        padding="80px 140px"
        sx={{
          background: "url(/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header count={tableData?.count || 0} />
        <Grid2
          container
          spacing={8}
          justifyContent="center"
          marginBottom={"58px"}
        >
          {pokemonData?.map((data, index: number) => (
            <Grid2 key={index} size={4}>
              <Box display="flex" justifyContent={"center"}>
                <PokeCard
                  data={data}
                  openModal={() => {
                    setModalData(data);
                    setOpenModal(true);
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
        <AppPagination totalData={tableData?.count || 0} />
        <PokeModal
          modalData={modalData}
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </Box>
    </section>
  );
};

export default PokeDex;
