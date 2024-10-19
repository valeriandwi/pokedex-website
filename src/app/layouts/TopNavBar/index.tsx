import { Container, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";

const TopNavBar = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "32px",
        padding: "0px 140px",
        backgroundColor: "#F7F8F8",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          height: "18px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Image alt="globe-icon" src="/icons/globe.svg" height="16" width="16" />
        <Select
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            color: "#7B8082",
            gap: "8px",
          }}
          disableUnderline
          value="english"
          variant="standard"
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem>Indonesia</MenuItem>
        </Select>
      </Container>
    </Container>
  );
};

export default TopNavBar;
