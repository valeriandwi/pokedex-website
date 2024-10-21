import PrimaryButton from "@/app/components/PrimaryButton";
import { Link } from "@/i18n/routing";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HomeContent = () => {
  const t = useTranslations("HomePage");

  return (
    <Box
      width="full"
      height="880px"
      display="flex"
      alignItems="center"
      padding="0 140px"
    >
      <Box
        display="flex"
        gap="32px"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Box width="534px" display="flex" flexDirection="column" gap="16px">
          <Typography color="#42494D" fontSize="52px" fontWeight="700">
            {t("title")}
          </Typography>
          <Typography fontSize="20px" color="#7B8082" fontWeight="400">
            {t("subtitle")}
          </Typography>
        </Box>
        <PrimaryButton>
          <Link href="#pokedex">{t("button")}</Link>
        </PrimaryButton>
      </Box>
      <Box
        display="flex"
        width="-webkit-fill-available"
        justifyContent="center"
      >
        <Image src="/homepage.svg" width="534" height="631" alt="pokemon" />
      </Box>
    </Box>
  );
};

export default HomeContent;
