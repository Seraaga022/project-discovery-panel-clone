import { Box, Container } from "@mui/material";

const Assets = () => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1400px",
          },
        }}
      >
        <Box>Assets</Box>
      </Container>
    </Box>
  );
};

export default Assets;
