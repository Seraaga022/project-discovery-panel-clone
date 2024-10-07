import { Dialog } from "@mui/material";
import React from "react";

const CustomDialog = ({
  children,
  show,
  setState: setState,
  blur = 11,
}: {
  children: React.ReactNode;
  show: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  blur?: number;
}) => {
  return (
    <Dialog
      open={show}
      onClose={() => setState(false)}
      sx={{
        color: "#fff",
        scrollBehavior: "smooth",
        transition: "height ease 1000ms",
        backdropFilter: `blur(${blur}px)`,
        "& .MuiPaper-root": {
          scrollBehavior: "smooth",
          maxWidth: "100vw",
          bgcolor: "transparent",
          overflowY: "scroll",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "7px",
            "&-thumb": {
              bgcolor: "#27272a",
              borderRadius: "10px",
            },
          },
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
