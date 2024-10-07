import { Yard } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { UserT } from "../../utils/types/User";
import CustomChip from "../ui/CustomChip";

const UserPlanChip = ({ plan }: { plan: UserT["plan"] }) => {
  return (
    <CustomChip>
      {/* Plan icon */}
      <Box display="flex" alignItems="center">
        <Yard sx={{ fontSize: "12px" }} />
      </Box>
      {/* Plan title */}
      <Box>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 500,
          }}
        >
          {plan.toUpperCase()}
        </Typography>
      </Box>
    </CustomChip>
  );
};

export default UserPlanChip;
