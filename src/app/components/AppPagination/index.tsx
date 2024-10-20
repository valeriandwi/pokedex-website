import { Box, Pagination, Typography } from "@mui/material";
import React from "react";

const AppPagination = () => {
  return (
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
  );
};

export default AppPagination;
