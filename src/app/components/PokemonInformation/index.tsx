"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ChipType from "../ChipType";
import Title from "../Title";
import { Ability, Type } from "@/app/type/pokemon.type";
import MoreDetailButton from "./MoreDetailButton";
import { Link } from "@/i18n/routing";
import { getTypeIdFromURL } from "@/app/utils/utils";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Pokemon");

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
              <Title width="125px">{t("label_weight")}: </Title>
              <Value>{weight}</Value>
            </Box>
            <Box display="flex" flexDirection="row" gap="10px">
              <Title width="125px">{t("label_height")}: </Title>
              <Value>{height}</Value>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title width="125px">{t("label_abilities")}: </Title>
            <Box marginLeft="15px">
              <ul>
                {abilities?.map((ability, index) => (
                  <li key={index}>{ability?.ability?.name}</li>
                ))}
              </ul>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap="10px">
            <Title width="125px">{t("label_type")}: </Title>
            {type?.map(({ type }, index) => {
              const typeId: string = getTypeIdFromURL(type.url);

              return (
                <Link key={index} href={`type/${typeId}`}>
                  <ChipType typeId={Number(typeId)} label={type.name} />
                </Link>
              );
            })}
          </Box>
        </Box>
        {showDetailButton && <MoreDetailButton id={id} />}
      </Box>
    </Box>
  );
};

export default PokemonInformation;
