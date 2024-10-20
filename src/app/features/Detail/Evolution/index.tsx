import Title from "@/app/components/Title";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const EvolutionState = styled("div")`
  width: 197.5px;
  height: 197.5px;
  border: 10px solid #01b956;
  border-radius: 99999px;
  rounded: full;
  margin-top: 20px;
`;

const Evolution = () => {
  return (
    <Box marginTop="35px">
      <Title>Evolution :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {[1, 2, 3].map((state, index) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap="25px"
              alignItems="center"
            >
              {index !== 0 && (
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow-right"
                  width="50"
                  height="50"
                />
              )}
              <EvolutionState key={state} />
            </Box>
            <Title
              sx={index !== 0 ? { marginLeft: "75px" } : {}}
              textAlign="center"
            >
              Pokemon evolution state {state} name
            </Title>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Evolution;
