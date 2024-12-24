import { Box, Switch, Typography } from "@mui/material";

const AutoScanFeatureCard = () => {
  return (
    <Box
      width="475px"
      borderRadius="7px"
      height="160px"
      zIndex={999}
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0.05))",
        border: "1px solid rgb(27 31 34/1)",
        backdropFilter: "blur(1rem)",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="15px"
        alignItems="center"
        height="100%"
      >
        {/* text */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "rgb(110 131 145/1)",
              fontSize: "14px",
              textAlign: "center",
              letterSpacing: 0.5,
            }}
          >
            Automatically scan your assets as soon as we <br />
            release new templates
          </Typography>
        </Box>
        {/* switch */}
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="9999px"
            bgcolor="rgb(31 37 41/1)"
            pl="13px"
            maxHeight="30px"
          >
            {/* text */}
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "hsla(0,0%,93%,.5)",
                  fontSize: "13px",
                  fontWeigt: 600,
                }}
              >
                REAL-TIME AUTOSCAN
              </Typography>
            </Box>
            {/* switch */}
            <Box>
              <Switch
                // checked={false}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& .MuiSwitch-thumb": {
                    ml: "7px",
                    mt: "3px",
                    bgcolor: "#2c343a",
                    width: "14px",
                    height: "14px",
                    boxSizing: "border-box",
                  },
                  "& .MuiTouchRipple-root": {
                    bgcolor: "transparent",
                    height: "100%",
                  },
                  "& .MuiSwitch-track": {
                    m: "0",
                    bgcolor: "#09090b",
                    opacity: 1,
                    height: "23px",
                    pr: "42px",
                    borderRadius: "9999px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AutoScanFeatureCard;
