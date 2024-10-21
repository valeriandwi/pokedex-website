import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

interface HeaderProps {
  count: number;
}

const Header: React.FC<HeaderProps> = ({ count }) => {
  const t = useTranslations("HomePage");

  return (
    <Box padding="80px 140px" display="flex" flexDirection="column" gap="18px">
      <Typography align="center" fontWeight="700" fontSize="40px">
        {t("pokedex")}
      </Typography>
      <Typography align="center" fontSize="24px" fontWeight="400">
        {t("pokedex_subtitle")} <br />
        {count} Pokemon
      </Typography>
    </Box>
  );
};

export default Header;
