"use client";
import Title from "@/app/components/Title";
import emotionStyled from "@emotion/styled";
import { Box, Divider, Link, List } from "@mui/material";
import React from "react";

const MenuWrapper = emotionStyled("ul")`
  padding-left : 20px;
  gap : 8px;
  display : flex;
  flex-direction: column;
`;

const Menu = emotionStyled("li")<{ selected?: boolean }>`
  color : ${(props) => (props.selected ? "#0779B0" : "#7B8082")};
  font-weight : ${(props) => (props.selected ? "700" : "500")};
  font-size : 14px;
  line-height : 21px;
`;

const Navigation = () => {
  return (
    <Box display="flex" flexDirection="row" gap="57px">
      <Box display="flex" flexDirection="column" gap="8px">
        <Title width="180px">Pokemon Type</Title>
        <MenuWrapper>
          <Menu selected>Pokemon Type 1</Menu>
          <Menu>Pokemon Type 1</Menu>
          <Menu>Pokemon Type 1</Menu>
        </MenuWrapper>
      </Box>
      <Divider
        orientation="vertical"
        color="#ECEDED"
        variant="middle"
        sx={{ height: "540px" }}
        flexItem
      />
    </Box>
  );
};

export default Navigation;
