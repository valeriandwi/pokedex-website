"use client";
import AppPagination from "@/app/components/AppPagination";
import ChipType from "@/app/components/ChipType";
import Title from "@/app/components/Title";
import { TYPE_COLOR } from "@/app/constants/constants";
import usePaginationStore from "@/app/store/pagination";
import useThemeStore from "@/app/store/theme";
import { PokemonTypeDetailResponse } from "@/app/type/pokemon-type.type";
import { PokemonAPIResponse } from "@/app/type/pokemon.type";
import { getListPokemonByType } from "@/app/utils/pokemon.api";
import { getTypeIdFromURL } from "@/app/utils/utils";
import { Link } from "@/i18n/routing";
import styled from "@emotion/styled";
import { Box, Card, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PokemonListProps {
  id: string;
}

const CardContainer = styled(Card)`
  max-width: 866px;
  opacity: 0.85;
  border-radius: 24px;
  padding: 20px;
`;

const ContentWrapper = styled("div")`
  padding: 24px;
  width: 150px;
  display: flex;
  justify-content: center;
`;

const PokemonList: React.FC<PokemonListProps> = ({ id }) => {
  const [pokemonData, setPokemonData] = React.useState<PokemonAPIResponse[]>();
  const [pokemonType, setPokemonType] =
    React.useState<PokemonTypeDetailResponse | null>(null);
  const { numberPerPage, pageNumber } = usePaginationStore();
  const { setTheme } = useThemeStore();

  React.useEffect(() => {
    setTheme({
      paginationBorderColor: TYPE_COLOR[Number(id) - 1],
      paginationSelectedColor: "#fff",
      paginationTextColor: TYPE_COLOR[Number(id) - 1],
    });
  }, [id]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getListPokemonByType({
        pageNumber: pageNumber,
        id: Number(id),
        limitPage: numberPerPage,
      });
      setPokemonType(response?.pokemonType?.data || null);
      setPokemonData(response?.allPokemonData || []);
    };
    fetchData();
  }, [id, pageNumber, numberPerPage]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="24px"
      width="-webkit-fill-available"
    >
      <Typography
        fontWeight="700"
        fontSize="40px"
        color="#42494D"
        textTransform="capitalize"
      >
        Pokemon with Type {pokemonType?.name}
      </Typography>
      <CardContainer>
        {pokemonData?.map((pokemon) => (
          <Box
            display="flex"
            flexDirection="row"
            gap="12px"
            alignItems="center"
            padding="24px"
            borderBottom="1px solid #ECEDED"
          >
            <ContentWrapper>
              <Link href={`/detail/${pokemon.id}`}>
                <Image
                  src={
                    pokemon?.sprites?.other?.dream_world?.front_default || ""
                  }
                  alt="pokemon-image"
                  width="100"
                  height="100"
                />
              </Link>
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Title> #{pokemon.id.toString().padStart(3, "0")}</Title>
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Title textTransform="capitalize">{pokemon?.name}</Title>
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Box display="flex" flexDirection="row" gap="10px">
                {pokemon?.types?.map((type, index) => {
                  const typeId: string = getTypeIdFromURL(type.type.url);
                  return (
                    <ChipType
                      key={index}
                      typeId={Number(typeId)}
                      label={type.type.name}
                    />
                  );
                })}
              </Box>
            </ContentWrapper>
          </Box>
        ))}
        <AppPagination
          size="small"
          totalData={pokemonType?.pokemon?.length || 0}
        />
      </CardContainer>
    </Box>
  );
};

export default PokemonList;
