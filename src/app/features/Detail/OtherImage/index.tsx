import Title from "@/app/components/Title";
import { SpriteVariant } from "@/app/type/pokemon.type";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface OtherImageProps {
  images?: SpriteVariant;
}

const OtherImage: React.FC<OtherImageProps> = ({ images }) => {
  const otherImage = images
    ? Object.values(images)
        .filter((value) => value && typeof value === "string")
        .slice(-6)
    : [];

  return (
    <Box marginBottom="35px">
      <Title>Other Images :</Title>
      <Box display="flex" flexDirection="row" gap="25px">
        {otherImage.map((photo, index) => (
          <Image
            key={index}
            src={photo || ""}
            alt="other-photo"
            width="170"
            height="170"
            priority
          />
        ))}
      </Box>
    </Box>
  );
};

export default OtherImage;
