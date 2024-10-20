import styled from "@emotion/styled";
import { Chip } from "@mui/material";

const getBgColor = (type: number): string => {
  switch (type) {
    case 1:
      return "#E66D00";
    case 2:
      return "#DE2C2C";
    case 3:
      return "#01B956";
    case 4:
      return "#E34C88";
    case 5:
      return "#4350E6";
    case 6:
      return "#FFAF66";
    default:
      return "#b3b6b8";
  }
};

const ChipType = styled(Chip)<{ type?: number }>`
  background-color: ${(props) => getBgColor(props.type || 0)};
  color: white;
`;

// Use the styled component as a regular component
export default ChipType;
