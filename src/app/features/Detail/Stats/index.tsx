import Title from "@/app/components/Title";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const StatsInfo = styled("div")`
  width: 170px;
  height: 170px;
  border: 25px solid #0571a6;
  border-radius: 99999px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center !important;
  rounded: full;
  margin-top: 20px;
`;

const StatsValue = styled(Typography)`
  font-size: 60px;
  color: #0571a6;
  font-weight: 700;
`;

const StatType = styled(Typography)`
  font-size: 20px;
  color: #42494d;
`;

const Stats = () => {
  return (
    <Box>
      <Title>Stats :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {[1, 2, 3, 4, 5, 6].map((stat) => (
          <StatsInfo key={stat}>
            <StatsValue>67</StatsValue>
            <StatType>Stat 1</StatType>
          </StatsInfo>
        ))}
      </Box>
    </Box>
  );
};

export default Stats;
