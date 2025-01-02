import { Box, Typography } from "@mui/material";
import FeedbackDialog from "./Feedback/FeedbackDialog";
import useDialog from "../../hooks/ui/useDialog";

const NavFeedback = () => {
  const {
    isDialogOpen: feedbackDialogState,
    setIsDialogOpen: setFeedbackDialogState,
  } = useDialog();

  return (
    <>
      <Box
        sx={{
          px: "15px",
          py: "7px",
          cursor: "pointer",
          "&:hover": { bgcolor: "#27272a" },
          transition: "background ease-in 50ms",
          border: "1px solid #27272a",
          borderRadius: "6px",
        }}
        onClick={() => setFeedbackDialogState(true)}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: 0.5,
          }}
        >
          Feedback
        </Typography>
      </Box>
      {/* feedback dialog */}
      <FeedbackDialog
        isOpen={feedbackDialogState}
        setIsOpen={setFeedbackDialogState}
      />
    </>
  );
};

export default NavFeedback;
