import { ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  pulsingAnimation?: boolean;
  pulsingColor?: string;
}
