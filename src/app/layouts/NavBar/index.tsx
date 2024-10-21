import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { router } from "./constants";
import { Link } from "@/i18n/routing";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Box sx={{ backgroundColor: "#fff", padding: "8px 140px" }}>
        <Toolbar disableGutters sx={{ gap: "40px" }}>
          <Image
            src="/logo.svg"
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
                <Link href={route.path}>{route.label}</Link>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
