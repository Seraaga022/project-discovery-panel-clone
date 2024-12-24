import { Box, Container } from "@mui/material";

const Inventory = () => {
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
        Inventory
      </Container>
    </Box>
  );
};

export default Inventory;
