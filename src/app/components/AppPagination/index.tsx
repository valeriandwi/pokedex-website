import { Box, Pagination } from "@mui/material";
import React from "react";
import PerPageOption from "./PerPageOption";
import TotalData from "./TotalData";
import usePaginationStore from "@/app/store/pagination";
import emotionStyled from "@emotion/styled";
import useThemeStore from "@/app/store/theme";
import { PaginationSize } from "@/app/type/global.type";

interface AppPaginationProps {
  totalData: number;
  size?: PaginationSize;
}

const StyledPagination = emotionStyled(Pagination)<{
  bordercolor: string;
  selectedcolor: string;
  textcolor: string;
}>`
  .MuiPaginationItem-root {
    color: ${(props) => props.textcolor};
    border: ${(props) => (props.size === "small" ? "1px" : "3px")} solid ${(
  props
) => props.bordercolor};
    border-radius: 8px;
    height: ${(props) => (props.size === "small" ? "20px" : "50px")};
    min-width: ${(props) => (props.size === "small" ? "20px" : "40px")};

    &.Mui-selected {
      background-color: ${(props) => props.textcolor} !important;
      color:  ${(props) => props.selectedcolor} !important;
      width: ${(props) => (props.size === "small" ? "20px" : "50px")};
    }
  }

  .MuiPaginationItem-ellipsis {
    border: 0px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const AppPagination: React.FC<AppPaginationProps> = ({
  totalData,
  size = "medium",
}) => {
  const { numberPerPage, pageNumber, setPageNumber, resetPagination } =
    usePaginationStore();
  const { themeColor } = useThemeStore();

  React.useEffect(() => {
    resetPagination();
  }, []);

  return (
    <Box
      width="full"
      display="flex"
      justifyContent="center"
      flexDirection="row"
      alignItems={"center"}
      gap="78px"
    >
      <PerPageOption size={size} />
      <StyledPagination
        size={size}
        selectedcolor={themeColor.paginationSelectedColor || "#fff"}
        bordercolor={themeColor.paginationBorderColor || "#fff"}
        textcolor={themeColor.paginationTextColor || "#fff"}
        count={Math.floor(totalData / numberPerPage)}
        showFirstButton
        showLastButton
        variant="outlined"
        page={pageNumber}
        onChange={(_, page) => setPageNumber(page)}
      />
      <TotalData size={size} totalData={totalData} />
    </Box>
  );
};

export default AppPagination;
