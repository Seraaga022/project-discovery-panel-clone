import { Yard } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import type { UserT } from "@appTypes/types/user";
import CustomChip from "../Common/CustomChip";

const UserPlanChip: React.FC<
  {
    plan: UserT["plan"];
    iconic?: boolean;
  } & BoxProps
> = ({ plan, iconic = true, ...props }) => {
  return (
    <CustomChip {...props}>
      {/* Plan icon */}
      {iconic && (
        <Box display="flex" alignItems="center">
          <Yard sx={{ fontSize: "12px" }} />
        </Box>
      )}
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
