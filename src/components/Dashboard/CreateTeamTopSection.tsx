import { Box, BoxProps, Typography } from "@mui/material";
import CustomButton from "../Common/CustomButton/CustomButton";

const CreateTeam = (props: BoxProps) => {
  return (
    <Box {...props}>
      <CustomButton
        sx={{
          bgcolor: "#eeeeee",
          "&:hover": { bgcolor: "#d6d6d6" },
          color: "#18181b",
          px: "16px",
          py: "7px",
        }}
      >
        <Typography
          variant="default"
          fontWeight={600}
          sx={{ fontSize: "14px" }}
        >
          Create new team
        </Typography>
      </CustomButton>
    </Box>
  );
};

export default CreateTeam;
