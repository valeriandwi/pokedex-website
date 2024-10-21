import { TYPE_COLOR } from "@/app/constants/constants";
import styled from "@emotion/styled";
import { Chip } from "@mui/material";

const ChipType = styled(Chip)<{ typeId?: number }>`
  background-color: ${(props) => TYPE_COLOR[(props?.typeId || 1) - 1]};
  color: white;
  text-transform: capitalize;
`;

// Use the styled component as a regular component
export default ChipType;
