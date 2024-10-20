import PokemonInformation from "@/app/components/PokemonInformation";
import styled from "@emotion/styled";
import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PokeModalProps {
  open: boolean;
  handleClose: () => void;
}

const CloseButtonWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const PokeModal: React.FC<PokeModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1162px",
          height: "544px",
          bgcolor: "background.paper",
          borderRadius: "24px",
          p: "40px",
        }}
      >
        <CloseButtonWrapper>
          <Image
            src="/icons/close.svg"
            alt="close"
            width="24"
            height="24"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </CloseButtonWrapper>
        <PokemonInformation />
      </Box>
    </Modal>
  );
};

export default PokeModal;
