import { Box, Container } from "@mui/material";

const Dashboard = () => {
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
        <Box>Dashboard</Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
