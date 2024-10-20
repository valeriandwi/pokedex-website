import Title from "@/app/components/Title";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const OtherImage = () => {
  return (
    <Box marginBottom="35px">
      <Title>Other Images :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {[1, 2, 3, 4, 5, 6].map((photo) => (
          <Image
            key={photo}
            src="/"
            alt="other-photo"
            width="170"
            height="170"
          />
        ))}
      </Box>
    </Box>
  );
};

export default OtherImage;
