import { createTheme } from "@mui/material";

const CustomTooltip = () => {
  return createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            color: "#f4f4f5",
            backgroundColor: "#09090b",
            border: "1px solid #27272a",
            borderRadius: "6px",
          },
        },
      },
    },
  });
};

export default CustomTooltip;
