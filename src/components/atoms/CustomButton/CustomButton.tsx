import React from "react";
import { Button, ButtonProps, ThemeProvider } from "@mui/material";
import { CustomButtonTheme } from "./CustomButtonTheme";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={CustomButtonTheme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
};

export default CustomButton;
