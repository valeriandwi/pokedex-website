import React from "react";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <Container>
      <TopNavBar />
      <NavBar />
    </Container>
  );
};

export default MainLayout;
