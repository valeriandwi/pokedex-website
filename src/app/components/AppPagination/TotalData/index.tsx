import { Typography } from "@mui/material";
import React from "react";

interface TotalDataProps {
  totalData: number;
}

const TotalData: React.FC<TotalDataProps> = ({ totalData }) => {
  return (
    <Typography fontSize="20px" fontWeight="700" color="#fff">
      Total Data : {totalData}
    </Typography>
  );
};

export default TotalData;
