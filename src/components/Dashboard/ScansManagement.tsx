import { Box, Stack, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import CustomButton from "../atoms/CustomButton/CustomButton";

const ScansManagement = () => {
  return (
    <Box height="400px">
      <Box
        height="400px"
        position="relative"
        p="30px"
        px="33px"
        overflow="hidden"
        boxSizing="border-box"
        display="flex"
      >
        {/* text content and buttons */}
        <Stack spacing={2.5}>
          {/* texts */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: ".5px",
              }}
            >
              Your Scans <br />
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#878689",
                  letterSpacing: ".5px",
                }}
              >
                Set up automated vulnerability scans across your assets for
                comprehensive monitoring.
              </Typography>
            </Typography>
          </Box>
          {/* button */}
          <Box display="flex" zIndex={999} gap="10px">
            {/* button */}
            <CustomButton
              pulsingAnimation
              color="warning"
              endIcon={<FaPlus color="#000" size={11} />}
              sx={{
                bgcolor: "#f97316",
                px: "12px",
                py: "4px",
              }}
            >
              <Typography
                variant="default"
                sx={{
                  color: "#000",
                  fontSize: "12px",
                  letterSpacing: ".6",
                  fontWeight: 600,
                }}
              >
                Create New Scan
              </Typography>
            </CustomButton>
          </Box>
        </Stack>
        {/* img content */}
        <Box
          position="absolute"
          left="96px"
          bottom="-205px"
          right="120px"
          sx={{
            "& ._banner_": {
              zIndex: 23,
            },
          }}
        >
          <img
            className="_banner_"
            src="/images/ScanSpiral.png"
            alt=""
            width={600}
            height={600}
          />
        </Box>
        {/* scans blur background */}
        <Box
          position="absolute"
          right="0"
          bottom="-100px"
          height="194px"
          width="794px"
          bgcolor="rgb(249 115 22/1)"
          borderRadius="40px"
          sx={{
            opacity: 0.05,
            filter: "blur(100px)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default ScansManagement;