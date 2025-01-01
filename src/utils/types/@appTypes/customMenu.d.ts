import { MenuProps } from "@mui/material";

export interface CustomMenuProps extends MenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}
