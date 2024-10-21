"use client";
import { useRouter } from "@/i18n/routing";
import { Button } from "@mui/material";
import React from "react";

interface MoreDetailButton {
  id?: number;
}

const MoreDetailButton: React.FC<MoreDetailButton> = ({ id }) => {
  const router = useRouter();

  return (
    <Button
      sx={{
        marginTop: "52px",
        backgroundColor: "#E6AB09",
        width: "167px",
        height: "50px",
        borderRadius: "14px",
        color: "white",
        fontWeight: "bold",
      }}
      onClick={() => router.push(`/detail/${id}`)}
    >
      More Detail
    </Button>
  );
};

export default MoreDetailButton;
