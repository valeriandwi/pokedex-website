import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box padding="80px 140px" display="flex" flexDirection="column" gap="18px">
      <Typography align="center" fontWeight="700" fontSize="40px">
        PokèDex
      </Typography>
      <Typography align="center" fontSize="24px" fontWeight="400">
        All Generation totaling <br />
        999999 Pokemon
      </Typography>
    </Box>
  );
};

export default Header;
