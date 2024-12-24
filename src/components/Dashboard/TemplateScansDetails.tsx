import { Box, Stack, Typography } from "@mui/material";
import AutoScanFeatureCard from "./AutoScanFeatureCard";
import CustomVulsChart from "./CustomVulsChart";

const TemplateScansDetails = () => {
  return (
    <Box p="84px 56px">
      {/* text stats */}
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          scale: 1.2,
        }}
      >
        {/* static text */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#7d7d7e",
              fontSize: "14px",
              letterSpacing: 1.5,
              fontFamily: "consolas",
              textTransform: "uppercase",
            }}
          >
            Real-time nuclei templates feed
          </Typography>
        </Box>
        {/* stats */}
        <Box mt="15px">
          <Box display="flex" alignItems="center" gap="10px">
            {/* left */}
            <Box>
              <Box display="flex" gap="7px">
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "consolas",
                    }}
                  >
                    9342
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#858586", fontSize: "14px" }}
                  >
                    Templates
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* divider */}
            <Box
              sx={{
                backgroundColor: "#404040",
                maxWidth: "1.1px",
                maxHeight: "20px",
                minWidth: "1.1px",
                minHeight: "20px",
                rotate: "29deg",
                transition: "all 0.3s ease",
                color: "transparent",
              }}
            />
            {/* right */}
            <Box>
              <Box display="flex" gap="7px">
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "consolas",
                    }}
                  >
                    138
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#858586", fontSize: "14px" }}
                  >
                    In last 30 days
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* handBuild chart & autoScan */}
      <Box mt="60px">
        <Box
          display="flex"
          justifyContent="end"
          px="60px"
          boxSizing="border-box"
          position="relative"
        >
          {/* chart */}
          <CustomVulsChart />
          {/* right card */}
          <AutoScanFeatureCard />
          {/* horizontal bars */}
          <Box
            position="absolute"
            top="10px"
            right="460px"
            zIndex={998}
            width="210px"
            sx={{ opacity: 0.5 }}
          >
            <Stack spacing={0.46}>
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
              <Box height="3px" width="100%" bgcolor="#181819" />
              <Box height="2px" width="100%" bgcolor="#181819" />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TemplateScansDetails;
