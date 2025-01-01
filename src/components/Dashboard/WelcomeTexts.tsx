import { Box, BoxProps, Typography } from "@mui/material";
import type { UserT } from "@appTypes/user";

const WelcomeTexts = ({
  userName,
  ...props
}: {
  userName: UserT["userName"];
} & BoxProps) => {
  return (
    <Box {...props}>
      <Box>
        <Typography
          sx={{ color: "#c0c0c0", fontSize: ".9rem", lineHeight: "19px" }}
        >
          Hello&nbsp;
          <Box
            component="span"
            sx={{
              color: "#eeeeee",
              fontWeight: 900,
              fontSize: ".9rem",
              display: "inline",
            }}
          >
            {userName}
          </Box>
          &nbsp;, <Box component="br" /> Welcome to ProjectDiscovery
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeTexts;
