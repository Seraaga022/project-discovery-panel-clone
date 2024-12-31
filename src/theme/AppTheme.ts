import { createTheme } from "@mui/material";
import "../utils/types/declaration/mui-augmentation.d.ts";

export const AppTheme = createTheme({
  typography: {
    default: {
      fontSize: ".7rem",
      fontWeight: 500,
      color: "currentcolor",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'roboto';
            font-style: normal;
            font-weight: 400 500;
            src: url('/fonts/Roboto-Medium.ttf') format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
            
          @font-face {
          font-family: 'JetBrainsMono-Regular';
          font-style: normal;
          src: url('/fonts/JetBrainsMono-Regular.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "roboto, sans-serif",
        variant: "default",
      },
    },
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
  palette: {
    info: {
      main: "#252526",
      light: "#3B3B3B",
      300: "#6B6D80",
      dark: "#0e0e10",
      contrastText: "#6b6d79",
    },
    white: {
      main: "#eeeeee",
      light: "#e5e5eB",
      dark: "#d6d6d6",
      contrastText: "#18181B",
    },
    warning: {
      main: "#38270b",
      light: "#442f0b",
      400: "rgba(245, 158, 11, 0.5)",
      contrastText: "#f59e0b",
    },
  },
});
