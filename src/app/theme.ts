"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
    },
  },
});
