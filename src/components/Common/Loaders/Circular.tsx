import { CircularLoaderProps } from "@appTypes/loader";
import { Box, CircularProgress } from "@mui/material";

const Circular: React.FC<CircularLoaderProps> = ({ color = "#404040" }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress
        disableShrink
        sx={{
          maxWidth: "17px",
          maxHeight: "17px",
          "& .MuiCircularProgress-circle": {
            color: color,
          },
        }}
      />
    </Box>
  );
};

export default Circular;
