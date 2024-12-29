import { createTheme } from "@mui/material";
import { AppTheme } from "../../theme/AppTheme";

export const CustomButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "10px",
          textTransform: "none",
          borderRadius: "6px",
          m: 0,
          py: "3px",
          px: "10px",
          color: "currentcolor",
        },
      },
      variants: [
        {
          props: { color: "info" },
          style: {
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.info.dark,
            },
          },
        },
      ],
    },
  },
});
