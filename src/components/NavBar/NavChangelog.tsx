import { Box, Typography } from "@mui/material";
import ChangeLogDialog from "./ChangeLogDialog";
import useDialog from "../../hooks/ui/useDialog";

const NavChangelog = () => {
  const {
    isDialogOpen: changelogDialogState,
    setIsDialogOpen: setChangelogDialogState,
  } = useDialog();

  return (
    <>
      <Box onClick={() => setChangelogDialogState(true)}>
        <Typography
          sx={{
            fontSize: "13px",
            color: "#a1a1aa",
            "&:hover": { color: "#eeeeee" },
            cursor: "pointer",
            transition: "color ease-in 90ms",
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
