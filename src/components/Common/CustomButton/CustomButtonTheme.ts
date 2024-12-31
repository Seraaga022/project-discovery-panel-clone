import { createTheme } from "@mui/material";
import { AppTheme } from "../../../theme/AppTheme";

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
        // color: info
        {
          props: { color: "info" },
          style: {
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.info.dark,
            },
          },
        },
        // color: info, variant: outlined
        {
          props: { color: "info", variant: "outlined" },
          style: {
            backgroundColor: AppTheme.palette.info.dark,
            color: AppTheme.palette.info.contrastText,
            border: `1px solid ${AppTheme.palette.info.main}`,
            "&:hover": {
              backgroundColor: AppTheme.palette.info.main,
            },
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.info[300],
            },
          },
        },
        // color: white
        {
          props: { color: "white" },
          style: {
            backgroundColor: AppTheme.palette.white.main,
            color: AppTheme.palette.white.contrastText,
            "&:hover": { backgroundColor: AppTheme.palette.white.dark },
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.info.light, // ripple bg color
            },
          },
        },
        // color: warning
        {
          props: { color: "warning" },
          style: {
            backgroundColor: AppTheme.palette.warning.main,
            color: AppTheme.palette.warning.contrastText,
            "&:hover": { backgroundColor: AppTheme.palette.warning.light },
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.warning[400],
            },
          },
        },
      ],
    },
  },
});
