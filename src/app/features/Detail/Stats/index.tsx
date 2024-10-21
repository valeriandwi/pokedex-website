import Title from "@/app/components/Title";
import { STATS_COLOR } from "@/app/constants/constants";
import { Stat } from "@/app/type/pokemon.type";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

interface StatsProps {
  status?: Stat[];
}

const StatsInfo = styled("div")<{ color: string }>`
  width: 170px;
  height: 170px;
  border: 25px solid ${(props) => props.color};
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

const StatsValue = styled(Typography)<{ color: string }>`
  font-size: 32px;
  color: ${(props) => props.color};
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
          <StatsInfo key={index} color={STATS_COLOR[index]}>
            <StatsValue color={STATS_COLOR[index]}>{stat.base_stat}</StatsValue>
            <StatType>{stat.stat.name}</StatType>
          </StatsInfo>
        ))}
      </Box>
    </Box>
  );
};

export default Stats;
