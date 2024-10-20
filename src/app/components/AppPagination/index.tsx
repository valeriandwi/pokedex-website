import { Box, Pagination, Select } from "@mui/material";
import React from "react";
import PerPageOption from "./PerPageOption";
import TotalData from "./TotalData";
import usePaginationStore from "@/app/store/pagination";

interface AppPaginationProps {
  totalData: number;
}

const AppPagination: React.FC<AppPaginationProps> = ({ totalData }) => {
  const { numberPerPage, pageNumber, setPageNumber } = usePaginationStore();

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="row"
      alignItems={"center"}
      gap="78px"
    >
      <PerPageOption />
      <Pagination
        count={Math.floor(totalData / numberPerPage)}
        showFirstButton
        showLastButton
        variant="outlined"
        page={pageNumber}
        onChange={(_, page) => setPageNumber(page)}
      />
      <TotalData totalData={totalData} />
    </Box>
  );
};

export default AppPagination;
