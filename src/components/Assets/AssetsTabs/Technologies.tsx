import { Box, Container } from "@mui/material";

const Technologies = () => {
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
        Technologies
      </Container>
    </Box>
  );
};

export default Technologies;
