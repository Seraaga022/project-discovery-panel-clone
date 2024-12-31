import { Box, Stack, Typography } from "@mui/material";
import { IoMdCloudOutline } from "react-icons/io";
import CustomButton from "../Common/CustomButton/CustomButton";

const AssetManagement = () => {
  return (
    <Box height="400px">
      <Box
        height="400px"
        position="relative"
        p="30px"
        px="33px"
        overflow="hidden"
        boxSizing="border-box"
      >
        {/* text content and buttons */}
        <Stack spacing={2.8}>
          {/* static texts */}
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: ".5px",
              }}
            >
              Your Exposures
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#878689",
                letterSpacing: ".5px",
              }}
            >
              Continuously monitor as your team deploys.
            </Typography>
          </Stack>
          {/* buttons */}
          <Box display="flex" zIndex={999} gap="10px">
            {/* start discovery button */}
            <CustomButton
              pulsingAnimation
              color="secondary"
              sx={{
                bgcolor: "rgb(0 148 255/1)",
                px: "12px",
                py: "3.5px",
              }}
            >
              <Typography
                sx={{
                  color: "#09090b",
                  fontSize: "12.5px",
                  fontWeight: 500,
                }}
              >
                Start Discovery
              </Typography>
            </CustomButton>
            {/* cloud button */}
            <CustomButton
              color="warning"
              endIcon={<IoMdCloudOutline size={15} />}
              sx={{
                py: "5.5px",
                px: "12px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                Connect Cloud Services
              </Typography>
            </CustomButton>
          </Box>
        </Stack>
        {/* img content */}
        <Box position="absolute" left="-125px" bottom="-108px">
          <Box
            component="img"
            src="/images/Techicons.png"
            alt=""
            style={{
              transform: "rotateZ(-13deg)",
              width: "490px",
              height: "490px",
              zIndex: 23,
            }}
          />
        </Box>
        {/* assets blur background */}
        <Box
          position="absolute"
          left="-80px"
          bottom="-210px"
          height="300px"
          width="600px"
          bgcolor="rgb(0 71 255/1)"
          sx={{
            opacity: 0.2,
            filter: "blur(100px)",
          }}
        />
      </Box>
    </Box>
  );
};

export default AssetManagement;
