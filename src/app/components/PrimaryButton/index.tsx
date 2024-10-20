import { Button } from "@mui/material";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#E6AB09",
        width: "240px",
        height: "56px",
        borderRadius: "14px",
        padding: "8px 16px",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
