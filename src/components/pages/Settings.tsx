import { useNavigate } from "react-router-dom";
import useDialog from "../../hooks/ui/useDialog";
import CustomDialog from "../Common/CustomDialog";
import { Box } from "@mui/material";

const SettingsDialog = () => {
  const {
    isDialogOpen: isSettingsDialogOpen,
    setIsDialogOpen: setIsSettingsDialogOpen,
  } = useDialog(true);

  const navigate = useNavigate();

  return (
    <CustomDialog
      isOpen={isSettingsDialogOpen}
      setIsOpen={setIsSettingsDialogOpen}
      onClose={() => {
        setIsSettingsDialogOpen(false);
        navigate(-1);
      }}
    >
      <Box minWidth="1000px" minHeight="79svh">
        settings page
      </Box>
    </CustomDialog>
  );
};

export default SettingsDialog;
