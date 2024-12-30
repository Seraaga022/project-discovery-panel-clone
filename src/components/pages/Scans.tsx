import { Box, Stack, Typography } from "@mui/material";
import { useUser } from "../../hooks/useUser";
import { FaSistrix } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { HiCubeTransparent } from "react-icons/hi";
import { VscCompass } from "react-icons/vsc";
import TabFeaturesSVGBackground from "../Assets/TabFeaturesSVGBackground";
import { FiLink } from "react-icons/fi";
import PageContainer from "../Common/PageContainer";
import CustomButton from "../Common/CustomButton/CustomButton";

const Scans = () => {
  const user = useUser();
  const assetManagementFeatures = [
    {
      icon: <VscCompass color="#fff" size={24} />,
      title: "Modern scanning engine",
      description:
        "Utilizes Nuclei's open-source framework to automate vulnerability detection.",
    },
    {
      icon: <HiCubeTransparent color="#fff" size={24} />,
      title: "Zero noise",
      description:
        "Eliminates false positives and only detect exploitable vulnerabilities that matter.",
    },
    {
      icon: <AiOutlineCloudServer color="#fff" size={24} />,
      title: "Write custom detections",
      description:
        "Fully customizable template architecture for any vulnerability in any infrastructure.",
    },
    {
      icon: <FaSistrix color="#fff" size={24} />,
      title: "Real-time exploit feed",
      description:
        "Scan for new and trending attack vectors contributed by our global community.",
    },
  ];

  return (
    <Box>
      {user.plan === "free" ? (
        <Box bgcolor="red" position="fixed">
          <Box
            position="absolute"
            top="0"
            left="0"
            display="flex"
            justifyContent="center"
            width="99vw"
          >
            <Box width="660px" maxWidth="660px" position="relative">
              {/* title */}
              <Box pt="70px">
                {/* heading */}
                <Box display="flex" justifyContent="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: 1,
                    }}
                  >
                    Your Scans
                  </Typography>
                </Box>
                {/* description */}
                <Box mt="2.5px" display="flex" justifyContent="center">
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#848485", fontSize: "15px" }}
                  >
                    Requires Pro or Enterprise subscription
                  </Typography>
                </Box>
              </Box>
              {/* body */}
              <Box
                mt="30px"
                boxSizing="border-box"
                p="22px"
                pb="5px"
                bgcolor="#0d0d0f"
                border="1px solid hsla(0,0%,93%,.1)"
                borderRadius="8px"
                zIndex={999999}
                position="relative"
              >
                <Box>
                  {/* items */}
                  {assetManagementFeatures.map((i, index) => (
                    <>
                      <Box
                        display="flex"
                        mb="20px"
                        mt={index !== 0 ? "23px" : "0"}
                      >
                        {/* icon */}
                        <Box flex={0.1} display="flex" alignItems="center">
                          {i.icon}
                        </Box>
                        {/* content */}
                        <Box flex={1}>
                          <Box display="flex" flexDirection="column">
                            {/* heading */}
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: "#fff",
                                  fontSize: "14px",
                                  fontWeight: 700,
                                  letterSpacing: 0.5,
                                }}
                              >
                                {i.title}
                              </Typography>
                            </Box>
                            {/* description */}
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: "rgb(107 114 128/1)",
                                  fontSize: "13px",
                                  letterSpacing: 0.5,
                                }}
                              >
                                {i.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {/* divider */}
                      <Box
                        height="1px"
                        width="100%"
                        sx={{
                          background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                        }}
                      />
                    </>
                  ))}
                  {/* bottom */}
                  <Box pt="5px">
                    <Box display="flex">
                      {/* left */}
                      <Box flex={1} p="20px" boxSizing="border-box">
                        <Stack spacing={0.3}>
                          {/* title */}
                          <Box>
                            <Typography
                              variant="subtitle2"
                              color="#fff"
                              fontWeight={600}
                              letterSpacing={0.65}
                            >
                              Cloud scanning
                            </Typography>
                          </Box>
                          {/* description */}
                          <Box>
                            <Typography
                              variant="subtitle2"
                              fontWeight={300}
                              color="#6b7280"
                            >
                              Ultra-fast nuclei scans hosted and managed by
                              ProjectDiscovery.
                            </Typography>
                          </Box>
                          {/* button */}
                          <Box pt="15px">
                            <CustomButton
                              color="warning"
                              sx={{
                                minWidth: "10px",
                                px: "16px",
                                py: "8px",
                                color: "rgb(245 158 11/1)",
                                bgcolor: "rgba(245,158,11,.2)",
                                fontWeight: 700,
                                fontSize: "12px",
                              }}
                            >
                              Upgrader for Pro
                            </CustomButton>
                          </Box>
                        </Stack>
                      </Box>
                      {/* divider */}
                      <Box
                        width=".1%"
                        height="150px"
                        sx={{
                          background:
                            "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                        }}
                      />
                      {/* right */}
                      <Box flex={1} p="20px" boxSizing="border-box">
                        <Stack spacing={0.3}>
                          {/* title */}
                          <Box>
                            <Typography
                              variant="subtitle2"
                              color="#fff"
                              fontWeight={600}
                              letterSpacing={0.65}
                            >
                              Connect Nuclei
                            </Typography>
                          </Box>
                          {/* description */}
                          <Box>
                            <Typography
                              variant="subtitle2"
                              fontWeight={300}
                              color="#6b7280"
                            >
                              Connect and upload scan results from Nuclei.
                            </Typography>
                          </Box>
                          {/* button */}
                          <Box pt="15px">
                            <CustomButton
                              endIcon={<FiLink size={13} />}
                              sx={{
                                minWidth: "10px",
                                px: "16px",
                                py: "8px",
                                bgcolor: "rgba(75,211,253,.1)",
                                color: "rgb(75 211 253/1)",
                                fontSize: "13px",
                                fontWeight: 500,
                              }}
                            >
                              View Instructions
                            </CustomButton>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                  {/* blur effect */}
                  <Box
                    bgcolor="rgb(238 238 238/1)"
                    borderRadius="9999px"
                    width="400px"
                    height="450px"
                    position="absolute"
                    top="0"
                    right="80px"
                    sx={{ opacity: 0.1, filter: "blur(100px)" }}
                  />
                </Box>
              </Box>
              {/* svg background */}
              <Box
                position="absolute"
                top="230px"
                right="-245px"
                zIndex={999998}
              >
                <TabFeaturesSVGBackground />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <PageContainer>
            <Box>Scans</Box>
          </PageContainer>
        </Box>
      )}
    </Box>
  );
};

export default Scans;
