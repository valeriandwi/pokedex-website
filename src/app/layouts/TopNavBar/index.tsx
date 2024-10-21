"use client";
import {
  Box,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TopNavBar = () => {
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const onSelectChange = (e: SelectChangeEvent<string>) => {
    const nextLocale = e.target.value;
    console.log(redirectedPathName(nextLocale));
    router.replace(redirectedPathName(nextLocale));
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "32px",
        padding: "0px 140px",
        backgroundColor: "#F7F8F8",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "18px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Image alt="globe-icon" src="/icons/globe.svg" height="16" width="16" />
        <Select
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            color: "#7B8082",
            gap: "8px",
          }}
          defaultValue={localeActive}
          disableUnderline
          variant="standard"
          onChange={onSelectChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="id">Indonesia</MenuItem>
        </Select>
      </Box>
    </Container>
  );
};

export default TopNavBar;
