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
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          border: "3px solid white",
          borderRadius: "8px",
          height: "50px",
          minWidth: "40px",
          "&.Mui-selected": {
            backgroundColor: "white",
            color: "#E6AB09",
            width: "50px",
          },
        },
        ellipsis: {
          border: "0px",
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
      },
    },
  },
});
