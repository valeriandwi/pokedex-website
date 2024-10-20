import Title from "@/app/components/Title";
import { PokemonAPIResponse } from "@/app/type/pokemon.type";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface EvolutionProps {
  evolutionData: PokemonAPIResponse[];
}

const EvolutionState = styled("div")`
  width: 197.5px;
  height: 197.5px;
  border: 10px solid #01b956;
  border-radius: 99999px;
  rounded: full;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Evolution: React.FC<EvolutionProps> = ({ evolutionData }) => {
  return (
    <Box marginTop="35px">
      <Title>Evolution :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {evolutionData.map((state, index) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap="25px"
              alignItems="center"
            >
              {index !== 0 && (
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow-right"
                  width="50"
                  height="50"
                />
              )}
              <EvolutionState key={index}>
                <Image
                  src={state?.sprites?.other?.dream_world?.front_default || ""}
                  alt={state.name}
                  width="100"
                  height="100"
                />
              </EvolutionState>
            </Box>
            <Title
              marginLeft={index !== 0 ? "75px" : 0}
              textAlign="center"
              textTransform="capitalize"
            >
              {state.name}
            </Title>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Evolution;
