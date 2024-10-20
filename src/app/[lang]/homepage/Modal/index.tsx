import ChipType from "@/app/components/ChipType";
import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
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

const Title = styled(Typography)`
  font-weight: 700;
  font-size: 20;
  color: #42494d;
  width: 125px;
`;

const Value = styled(Typography)`
  font-size: 20;
  color: #42494d;
  width: 183px;
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
        <Box display="flex" flexDirection="row" gap={"16px"}>
          <Image src="/logo.svg" width={400} height={400} alt="pokemon-image" />
          <Box>
            <Typography fontWeight="700" fontSize="40px" color="#42494D">
              Pokemon Name
            </Typography>
            <Box mt="16px" display="flex" flexDirection="column" gap="10px">
              <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row" gap="10px">
                  <Title>Weight: </Title>
                  <Value>9999</Value>
                </Box>
                <Box display="flex" flexDirection="row" gap="10px">
                  <Title>Height: </Title>
                  <Value>999</Value>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap="10px">
                <Title>Abilities: </Title>
                <Value>
                  <ul>
                    <li>Abilities 1</li>
                    <li>Abilities 2</li>
                  </ul>
                </Value>
              </Box>
              <Box display="flex" flexDirection="row" gap="10px">
                <Title>Type: </Title>
                {[1, 2, 3].map((type) => (
                  <ChipType type={type} label={`Type ${type}`} />
                ))}
              </Box>
            </Box>
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
            >
              More Detail
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PokeModal;
