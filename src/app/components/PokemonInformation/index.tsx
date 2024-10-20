import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ChipType from "../ChipType";
import Title from "../Title";

interface PokemonInformationProps {
  showDetailButton?: boolean;
}

const Value = styled(Typography)`
  font-size: 20;
  color: #42494d;
  width: 183px;
`;

const PokemonInformation: React.FC<PokemonInformationProps> = ({
  showDetailButton = false,
}) => {
  return (
    <Box display="flex" flexDirection="row" gap={"16px"}>
      <Image src="/logo.svg" width={400} height={400} alt="pokemon-image" />
      <Box>
        <Typography fontWeight="700" fontSize="40px" color="#42494D">
          Pokemon Name
        </Typography>
        <Box mt="16px" display="flex" flexDirection="column" gap="10px">
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="row" gap="10px">
              <Title>Weight: </Title>
              <Value>9999</Value>
            </Box>
            <Box display="flex" flexDirection="row" gap="10px">
              <Title>Height: </Title>
              <Value>999</Value>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title>Abilities: </Title>
            <Value>
              <p>Abilities 1</p>
              <p>Abilities 2</p>
            </Value>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title>Type: </Title>
            {[1, 2, 3].map((type) => (
              <ChipType type={type} label={`Type ${type}`} />
            ))}
          </Box>
        </Box>
        {showDetailButton && (
          <Button
            sx={{
              marginTop: "52px",
              backgroundColor: "#E6AB09",
              width: "167px",
              height: "50px",
              borderRadius: "14px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            More Detail
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PokemonInformation;
