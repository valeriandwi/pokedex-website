import { PER_PAGE_OPTIONS } from "@/app/constants/constants";
import usePaginationStore from "@/app/store/pagination";
import emotionStyled from "@emotion/styled";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const StyledSelect = emotionStyled(Select)`
  width : 61px;
  height : 50px;
  border : 3px solid white;
  border-radius : 8px;
  font-size : 20px;
  text-align : center;
  font-weight : 700;
  color : white
`;

const PerPageOption: React.FC = () => {
  const { numberPerPage, setNumberPerPage } = usePaginationStore();

  return (
    <Box display="flex" flexDirection="row" gap="36px" alignItems="center">
      <Typography fontSize="20px" fontWeight="700" color="#fff">
        Per Page :
      </Typography>
      <StyledSelect
        value={numberPerPage}
        onChange={(event) => setNumberPerPage(event.target.value as number)}
        variant="standard"
        disableUnderline
      >
        {PER_PAGE_OPTIONS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default PerPageOption;
