import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  width: "100%",
  color: "#333",
  backgroundColor: "#f00",
  "&:hover": {
    backgroundColor: "#ff800051",
  },
}));
