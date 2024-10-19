import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { router } from "./constants";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Container sx={{ backgroundColor: "#fff", padding: "8px 140px" }}>
        <Toolbar disableGutters sx={{ gap: "40px" }}>
          <Image
            src="logo.svg"
            alt="pokemon-logo"
            width={167}
            height={59}
            priority
          />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                gap: "32px",
              },
            }}
          >
            {router.map((route, index) => (
              <Typography key={index} sx={{ my: 2, color: "#42494D" }}>
                {route.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
