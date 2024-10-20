import Title from "@/app/components/Title";
import { Stat } from "@/app/type/pokemon.type";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

interface StatsProps {
  status?: Stat[];
}

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
  padding: 16px;
`;

const StatsValue = styled(Typography)`
  font-size: 32px;
  color: #0571a6;
  font-weight: 700;
`;

const StatType = styled(Typography)`
  font-size: 14px;
  color: #42494d;
  text-transform: capitalize;
`;

const Stats: React.FC<StatsProps> = ({ status }) => {
  return (
    <Box>
      <Title>Stats :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {status?.map((stat, index) => (
          <StatsInfo key={index}>
            <StatsValue>{stat.base_stat}</StatsValue>
            <StatType>{stat.stat.name}</StatType>
          </StatsInfo>
        ))}
      </Box>
    </Box>
  );
};

export default Stats;
