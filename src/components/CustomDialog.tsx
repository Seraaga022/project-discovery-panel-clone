import { Dialog } from "@mui/material";
import React from "react";

const CustomDialog: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  blur?: number;
}> = ({ children, isOpen, setIsOpen, blur = 11 }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{
        "& .MuiPaper-root": {
          scrollBehavior: "smooth",
          maxWidth: "100vw",
          bgcolor: "transparent",
          overflowX: "hidden",
          overflowY: "scroll",
          maxHeight: "100svh",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "7px",
            "&-thumb": {
              bgcolor: "#27272a",
              borderRadius: "10px",
            },
          },
        },
        "& > *": {
          maxHeight: "100svh",
        },
        width: "100vw",
        color: "#fff",
        scrollBehavior: "smooth",
        transition: "height ease 1000ms",
        backdropFilter: `blur(${blur}px)`,
      }}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
