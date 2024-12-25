import { createTheme } from "@mui/material";

export const NewAssetDialogAdvancedTabTheme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          scale: 0.8,
          mx: "-16px",
          display: "flex",
          alignItems: "center",
          "& .MuiTouchRipple-root": {
            bgcolor: "transparent",
            height: "100%",
          },
        },
        disabled: {
          "& .MuiSwitch-thumb": {
            bgcolor: "#8a8a8b",
          },
          "& + .MuiSwitch-track": {
            bgcolor: "#242425 !important",
            opacity: ".8 !important",
          },
        },
        checked: {
          "& .MuiSwitch-thumb": {
            bgcolor: "#6366f1",
          },
          "& + .MuiSwitch-track": {
            bgcolor: "#333333 !important",
            opacity: "1 !important",
          },
        },
        thumb: {
          ml: "7px",
          mt: "3px",
          bgcolor: "#eeeeee",
          width: "14px",
          height: "14px",
          boxSizing: "border-box",
        },
        track: {
          m: "0",
          bgcolor: "#333333",
          opacity: 1,
          height: "23px",
          pr: "42px",
          borderRadius: "9999px",
          boxSizing: "border-box",
        },
      },
    },
  },
});
