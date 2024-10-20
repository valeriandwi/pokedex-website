import {
  Box,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "./Title";
import Card from "./Card";

const PokeDex = () => {
  return (
    <Box
      bgcolor={"#FFCB3B"}
      padding="80px 140px"
      sx={{
        background: "url(/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Title />
      <Grid2
        container
        spacing={8}
        justifyContent="center"
        marginBottom={"58px"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Grid2 key={index} size={4}>
            <Box display="flex" justifyContent={"center"}>
              <Card />
            </Box>
          </Grid2>
        ))}
      </Grid2>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems={"center"}
        gap="78px"
      >
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          variant="outlined"
        />
        <Typography fontSize="20px" fontWeight="700" color="#fff">
          Total Data :{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default PokeDex;
