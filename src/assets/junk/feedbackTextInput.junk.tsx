import { TextField } from "@mui/material";

<TextField
  placeholder="Add a title"
  sx={{
    width: "100%",
    maxHeight: "40px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "7px",
    bgcolor: "#0e0e10",
    border: "1px solid #19191b",
    p: "1px",
    "& .MuiInputBase-input": {
      color: "#b2b6cd",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderRadius: "7px",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      mt: "6px",
      mb: "3px",
      px: "18px",
      maxHeight: "40px",
      transition: "border ease-in-out 300ms",
      border: "3px solid #141423",
    },
  }}
></TextField>;
