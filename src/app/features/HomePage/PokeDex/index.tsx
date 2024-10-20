"use client";
import { Box, Grid2, Pagination, Typography } from "@mui/material";
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

const PokeDex = () => {
  const {
    open: openModal,
    setOpen: setOpenModal,
    setModalData,
    modalData,
  } = useModal<PokemonAPIResponse>();

  const [tableData, setTableData] = React.useState<
    PokemonListResponse | undefined
  >(undefined);
  const [pokemonData, setPokemonData] = React.useState<PokemonAPIResponse[]>(
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getListPokemon();
      setTableData(result?.pokemonList);
      setPokemonData(result?.allPokemonInformation as PokemonAPIResponse[]);
    };
    fetchData();
  }, []);

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
        <Header />
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
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignItems={"center"}
          gap="78px"
        >
          <Pagination
            count={Math.floor((tableData?.count || 0) / 9)}
            showFirstButton
            showLastButton
            variant="outlined"
          />
          <Typography fontSize="20px" fontWeight="700" color="#fff">
            Total Data : {tableData?.count}
          </Typography>
        </Box>
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
