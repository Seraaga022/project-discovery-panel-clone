import { Container, ContainerProps } from "@mui/material";
import React from "react";

const PageContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        "&.MuiContainer-maxWidthLg": {
          maxWidth: "1400px",
        },
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
