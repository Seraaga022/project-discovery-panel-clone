import React from "react";
import { Box, Button, ThemeProvider } from "@mui/material";
import { CustomButtonTheme } from "./CustomButtonTheme";
import { PulsingAnimation } from "../Animations";
import type { CustomButtonProps } from "@appTypes/types/customButton";

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={CustomButtonTheme}>
      {props.pulsingAnimation ? (
        <Box position="relative">
          <Box
            position="absolute"
            top="-3px"
            right="-3px"
            width="12px"
            height="12px"
            borderRadius="9999px"
            bgcolor="#e9d5ff"
            display="flex"
            zIndex="99999"
          >
            <PulsingAnimation />
          </Box>
          <Button {...props}>{children}</Button>
        </Box>
      ) : (
        <Button {...props}>{children}</Button>
      )}
    </ThemeProvider>
  );
};

export default CustomButton;