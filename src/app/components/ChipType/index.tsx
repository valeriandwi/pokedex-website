import styled from "@emotion/styled";
import { Chip } from "@mui/material";

const getBgColor = (type: string): string => {
  switch (type) {
    case "poison":
      return "#E66D00";
    case "fire":
      return "#DE2C2C";
    case "grass":
      return "#01B956";
    case "flying":
      return "#E34C88";
    case "water":
      return "#4350E6";
    case "electric":
      return "#FFAF66";
    default:
      return "#b3b6b8";
  }
};

const ChipType = styled(Chip)<{ type?: string }>`
  background-color: ${(props) => getBgColor(props.type || "")};
  color: white;
  text-transform: capitalize;
`;

// Use the styled component as a regular component
export default ChipType;
