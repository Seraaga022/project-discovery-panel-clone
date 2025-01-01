import { createTheme } from "@mui/material";

export const ToastTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: ".75rem",
        letterSpacing: ".6px",
      },
    },
  },
});
