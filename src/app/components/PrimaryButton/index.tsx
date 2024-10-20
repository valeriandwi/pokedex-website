"use client";
import emotionStyled from "@emotion/styled";
import { Button } from "@mui/material";

const PrimaryButton = emotionStyled(Button)`
  background-color : #E6AB09;
  width : 240px;
  height : 56px;
  border-radius : 14px;
  padding : 8px 16px;
  color : #fff;
  font-size : 20px;
  font-weight : 700;
`;

export default PrimaryButton;
