import { Box, Stack, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import { PulsingAnimation } from "../atoms/Animations";
import CustomButton from "../atoms/CustomButton/CustomButton";

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
        <Stack spacing={2.5}>
          {/* static texts */}
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
              Your Exposures <br />
              <Box
                component="span"
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#878689",
                  letterSpacing: ".5px",
                }}
              >
                Continuously monitor as your team deploys.
              </Box>
            </Typography>
          </Box>
          {/* buttons */}
          <Box display="flex" zIndex={999} gap="10px">
            <Box position="relative">
              {/* pulsing animation */}
              <Box
                position="absolute"
                top="-3px"
                right="-3px"
                width="12px"
                height="12px"
                borderRadius="9999px"
                bgcolor="#e9d5ff"
                display="flex"
                zIndex="99999"
              >
                <PulsingAnimation />
              </Box>
              {/* domain button */}
              <CustomButton
                color="secondary"
                endIcon={<FaPlus color="#09090b" size={11} />}
                sx={{
                  bgcolor: "rgb(0 148 255/1)",
                  px: "12px",
                  py: "3.5px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "rgb(9 9 11/1)",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Add Domain or IP
                </Typography>
              </CustomButton>
            </Box>
            {/* cloud button */}
            <CustomButton
              color="warning"
              endIcon={<IoMdCloudOutline color="#f59e0b" size={15} />}
              sx={{
                bgcolor: "#3c2a11",
                "&:hover": {
                  bgcolor: "#473111",
                },
                py: "4px",
                px: "12px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#f59e0b",
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
