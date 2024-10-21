"use client";
import ChipType from "@/app/components/ChipType";
import emotionStyled from "@emotion/styled";
import { Card, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PokeCardProps {
  openModal: () => void;
  data: any;
}

const PokeImage = emotionStyled(Image)`
  background-color: #fff;
`;

const PokeCard: React.FC<PokeCardProps> = ({ data, openModal }) => {
  return (
    <Card
      sx={{
        height: "550px",
        width: "325px",
        borderRadius: "24px",
        padding: "10px 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        "&:hover": {
          boxShadow: "0px 24px 48px 0 rgba(0,0,0,0.16)",
          cursor: "pointer",
        },
      }}
      onClick={openModal}
    >
      <PokeImage
        src={data?.sprites?.other?.dream_world?.front_default || ""}
        height="275"
        width="275"
        alt="pokemon-pic"
      />
      <Typography sx={{ color: "#B3B6B8", fontWeight: "700" }}>
        #{("000" + data.id).slice(1)}
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "40px",
          textTransform: "capitalize",
        }}
      >
        {data.name}
      </Typography>
      <Grid2 container spacing={2}>
        {data?.types?.map(({ type }: any, index: number) => (
          <Grid2 size={6} key={index}>
            <ChipType
              sx={{ width: "-webkit-fill-available" }}
              label={type?.name}
              type={type?.name}
            />
          </Grid2>
        ))}
      </Grid2>
    </Card>
  );
};

export default PokeCard;
