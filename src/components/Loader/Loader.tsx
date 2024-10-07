import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress
        disableShrink
        sx={{
          maxWidth: "17px",
          maxHeight: "17px",
          "& .MuiCircularProgress-circle": {
            color: "#404040",
          },
        }}
      />
    </Box>
  );
};

export default Loader;
