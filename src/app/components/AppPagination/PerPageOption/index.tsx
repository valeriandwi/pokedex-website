import { PER_PAGE_OPTIONS } from "@/app/constants/constants";
import usePaginationStore from "@/app/store/pagination";
import useThemeStore from "@/app/store/theme";
import { PaginationSize } from "@/app/type/global.type";
import emotionStyled from "@emotion/styled";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const StyledSelect = emotionStyled(Select)<{
  bordercolor: string;
  textcolor: string;
  size: PaginationSize;
}>`
  width : ${(props) => (props.size === "small" ? "37px" : "61px")};
  height : ${(props) => (props.size === "small" ? "20px" : "50px")};
  border : 3px solid ${(props) => props.bordercolor};
  border-radius : 8px;
  font-size : ${(props) => (props.size === "small" ? "10px" : "20px")};
  text-align : center;
  font-weight : 700;
  color : ${(props) => props.textcolor};
`;

const PerPageOption: React.FC<{ size: PaginationSize }> = ({ size }) => {
  const { numberPerPage, setNumberPerPage } = usePaginationStore();
  const { themeColor } = useThemeStore();
  return (
    <Box display="flex" flexDirection="row" gap="36px" alignItems="center">
      <Typography
        fontSize={size === "small" ? "10px" : "20px"}
        fontWeight="700"
        color={themeColor.paginationTextColor}
      >
        Per Page :
      </Typography>
      <StyledSelect
        size={size}
        value={numberPerPage}
        onChange={(event) => setNumberPerPage(event.target.value as number)}
        variant="standard"
        disableUnderline
        bordercolor={themeColor.paginationBorderColor || "#fff"}
        textcolor={themeColor.paginationTextColor || "#fff"}
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
