import { Box, Container } from "@mui/material";

const Scans = () => {
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
        <Box>Scans</Box>
      </Container>
    </Box>
  );
};

export default Scans;
