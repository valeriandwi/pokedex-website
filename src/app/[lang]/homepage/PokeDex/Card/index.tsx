"use client";
import ChipType from "@/app/components/ChipType";
import emotionStyled from "@emotion/styled";
import { Card, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PokeImage = emotionStyled(Image)`
  background-color: #B3B6B8;
`;

const PokeCard = () => {
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
    >
      <PokeImage src="logo.svg" height="275" width="275" alt="pokemon-pic" />
      <Typography sx={{ color: "#B3B6B8", fontWeight: "700" }}>#001</Typography>
      <Typography sx={{ fontWeight: "700", fontSize: "40px" }}>
        Poke Name
      </Typography>
      <Grid2 container spacing={2}>
        {[1, 2, 3, 4].map((type) => (
          <Grid2 size={6} key={type}>
            <ChipType
              sx={{ width: "-webkit-fill-available" }}
              label={`Type ${type}`}
              type={type}
            />
          </Grid2>
        ))}
      </Grid2>
    </Card>
  );
};

export default PokeCard;
