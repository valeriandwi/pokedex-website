import useThemeStore from "@/app/store/theme";
import { PaginationSize } from "@/app/type/global.type";
import { Typography } from "@mui/material";
import React from "react";

interface TotalDataProps {
  totalData: number;
  size: PaginationSize;
}

const TotalData: React.FC<TotalDataProps> = ({ totalData, size }) => {
  const { themeColor } = useThemeStore();
  return (
    <Typography
      fontSize={size === "small" ? "10px" : "20px"}
      fontWeight="700"
      color={themeColor.paginationTextColor}
    >
      Total Data : {totalData}
    </Typography>
  );
};

export default TotalData;
