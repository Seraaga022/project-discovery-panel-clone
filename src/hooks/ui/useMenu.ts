import { useState } from "react";

export default function useMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const IS_MENU_OPEN = !!anchorEl;
  const handleMenuTriggerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    setAnchorEl,
    IS_MENU_OPEN,
    handleMenuTriggerClick,
    handleMenuClose,
  };
}
