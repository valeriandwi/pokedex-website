import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ChipType from "../ChipType";
import Title from "../Title";
import { Ability, Type } from "@/app/type/pokemon.type";
import { useRouter } from "next/navigation";

interface PokemonInformationProps {
  showDetailButton?: boolean;
  imageSrc?: string;
  name?: string;
  weight?: number;
  height?: number;
  abilities?: Ability[];
  type?: Type[];
  id?: number;
}

const Value = styled(Typography)`
  font-size: 20;
  color: #42494d;
  width: 183px;
`;

const PokemonInformation: React.FC<PokemonInformationProps> = ({
  showDetailButton = false,
  imageSrc,
  name,
  weight,
  height,
  type,
  abilities,
  id,
}) => {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="row" gap={"16px"}>
      <Image
        src={imageSrc || ""}
        width={400}
        height={400}
        alt="pokemon-image"
      />
      <Box>
        <Typography
          textTransform="capitalize"
          fontWeight="700"
          fontSize="40px"
          color="#42494D"
        >
          {name}
        </Typography>
        <Box mt="16px" display="flex" flexDirection="column" gap="10px">
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="row" gap="10px">
              <Title width="125px">Weight: </Title>
              <Value>{weight}</Value>
            </Box>
            <Box display="flex" flexDirection="row" gap="10px">
              <Title width="125px">Height: </Title>
              <Value>{height}</Value>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title width="125px">Abilities: </Title>
            <Value marginLeft="15px">
              <ul>
                {abilities?.map((ability) => (
                  <li>{ability?.ability?.name}</li>
                ))}
              </ul>
            </Value>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title width="125px">Type: </Title>
            {type?.map(({ type }) => (
              <ChipType type={type.name} label={type.name} />
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
            onClick={() => router.push(`./detail/${id}`)}
          >
            More Detail
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PokemonInformation;
