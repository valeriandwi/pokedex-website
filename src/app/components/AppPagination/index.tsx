import { Box, Pagination } from "@mui/material";
import React from "react";
import PerPageOption from "./PerPageOption";
import TotalData from "./TotalData";
import emotionStyled from "@emotion/styled";
import useThemeStore from "@/app/store/theme";
import { PaginationSize } from "@/app/type/global.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_PER_PAGE_NUMBER } from "@/app/constants/constants";

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
  const { themeColor } = useThemeStore();

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPageSize =
    Number(searchParams.get("pageSize")) || DEFAULT_PER_PAGE_NUMBER;

  const changePageNumber = (pageNumber: number | string) => {
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

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
        count={Math.floor(totalData / currentPageSize)}
        showFirstButton
        showLastButton
        variant="outlined"
        page={currentPage}
        onChange={(_, pageNumber) => changePageNumber(pageNumber)}
      />
      <TotalData size={size} totalData={totalData} />
    </Box>
  );
};

export default AppPagination;
