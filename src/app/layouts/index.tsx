import React from "react";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";
import { Container } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <TopNavBar />
      <NavBar />
      {children}
    </Container>
  );
};

export default MainLayout;
