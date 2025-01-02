import { Box, Typography } from "@mui/material";
import useDialog from "../../hooks/ui/useDialog";
import ChangeLogDialog from "./ChangelogDialog";

const NavChangelog = () => {
  const {
    isDialogOpen: changelogDialogState,
    setIsDialogOpen: setChangelogDialogState,
  } = useDialog();

  return (
    <>
      <Box onClick={() => setChangelogDialogState(true)}>
        <Typography
          aria-details="brighten-on-hover"
          sx={{
            fontSize: "13px",
            color: "#a1a1aa",
            cursor: "pointer",
            fontWeight: 400,
            userSelect: "none",
          }}
        >
          Changelog
        </Typography>
      </Box>
      {/* changelog dialog */}
      <ChangeLogDialog
        isOpen={changelogDialogState}
        setIsOpen={setChangelogDialogState}
      />
    </>
  );
};

export default NavChangelog;
