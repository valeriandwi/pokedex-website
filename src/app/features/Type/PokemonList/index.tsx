"use client";
import AppPagination from "@/app/components/AppPagination";
import ChipType from "@/app/components/ChipType";
import Title from "@/app/components/Title";
import styled from "@emotion/styled";
import { Box, Card, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CardContainer = styled(Card)`
  max-width: 866px;
  opacity: 0.85;
  border-radius: 24px;
  padding: 20px;
`;

const ContentWrapper = styled("div")`
  padding: 24px;
`;

const PokemonList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="24px"
      width="-webkit-fill-available"
    >
      <Typography fontWeight="700" fontSize="40px" color="#42494D">
        Pokemon with Type 1
      </Typography>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pokemon) => (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding="24px"
            borderBottom="1px solid #ECEDED"
          >
            <ContentWrapper>
              <Image src="/" alt="pokemon-image" width="100" height="100" />
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Title>#001</Title>
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Title>Pokemon Name</Title>
            </ContentWrapper>
            <Divider
              color="#ECEDED"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <ContentWrapper>
              <Box display="flex" flexDirection="row" gap="10px">
                <ChipType type={1} label={"Type 1"} />
                <ChipType type={2} label={"Type 2"} />
              </Box>
            </ContentWrapper>
          </Box>
        ))}
        <AppPagination />
      </CardContainer>
    </Box>
  );
};

export default PokemonList;
