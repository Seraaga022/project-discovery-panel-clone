import { Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaSistrix } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import { TbScreenshot } from "react-icons/tb";
import { VscCompass } from "react-icons/vsc";
import CustomButton from "../Common/CustomButton/CustomButton";
import { RxPlus } from "react-icons/rx";
import CustomDialog from "../Common/CustomDialog";
import NewAssetDialogTabsHeader from "./NewAssetDialog/NewAssetDialogTabsHeader";
import NewAssetDialogScopeTab from "./NewAssetDialog/NewAssetDialogScopeTab";
import NewAssetDialogAdvancedTab from "./NewAssetDialog/NewAssetDialogAdvancedTab";
import NewAssetDialogTabsFooter from "./NewAssetDialog/NewAssetDialogTabsFooter";
import useDialog from "../../hooks/ui/useDialog";
import TabFeaturesSVGBackground from "./TabFeaturesSVGBackground";
import { AssetsFeaturesDialogProps } from "@appTypes/types/newAssetDialog";

const AssetsFeaturesDialog: React.FC<AssetsFeaturesDialogProps> = ({
  setAssets,
}) => {
  const assetManagementFeatures = [
    {
      icon: <VscCompass color="#fff" size={24} />,
      title: "Fully automated",
      description:
        "Map your entire infrastructure in minutes without any setup.",
    },
    {
      icon: <HiCubeTransparent color="#fff" size={24} />,
      title: "Technology detections",
      description:
        "Fingerprints your entire infrastructure with known technologies.",
    },
    {
      icon: <AiOutlineCloudServer color="#fff" size={24} />,
      title: "Integrates with 10 cloud services",
      description:
        "Connect AWS, Azure, GCP, Vercel, Cloudflare, Fastly, Hashicorp.",
    },
    {
      icon: <FaSistrix color="#fff" size={24} />,
      title: "Advanced filters and search",
      description:
        "Query your infrastructure data with advanced filters and search.",
    },
    {
      icon: <TbScreenshot color="#fff" size={24} />,
      title: "Screenshots",
      description: "Takes screenshots of each discovered asset.",
    },
  ];

  const [activeFeatureTab, setActiveFeatureTab] = React.useState<number>(0);

  const {
    isDialogOpen: isNewAssetDialogOpen,
    setIsDialogOpen: setIsNewAssetDialogOpen,
  } = useDialog();

  return (
    <Box bgcolor="red" position="fixed">
      <Box
        position="absolute"
        top="0"
        left="0"
        display="flex"
        justifyContent="center"
        width="99vw"
      >
        <Box width="560px" position="relative">
          {/* title */}
          <Box pt="70px">
            {/* heading */}
            <Box display="flex" justifyContent="center">
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                Your Exposure
              </Typography>
            </Box>
            {/* description */}
            <Box mt="2.5px" display="flex" justifyContent="center">
              <Typography sx={{ color: "#848485", fontSize: "15px" }}>
                Continuously monitor as your team deploys. Free up to 10
                domains.
              </Typography>
            </Box>
          </Box>
          {/* body */}
          <Box
            mt="30px"
            boxSizing="border-box"
            p="22px"
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
                  <Box display="flex" mb="20px" mt={index !== 0 ? "23px" : "0"}>
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
              {/* buttons */}
              <Box mt="20px">
                <Box display="flex" justifyContent="center" gap="8px">
                  {/* start discovery button */}
                  <Box>
                    <CustomButton
                      onClick={() => setIsNewAssetDialogOpen(true)}
                      endIcon={<RxPlus size={18} />}
                      fullWidth
                      color="white"
                      sx={{
                        px: "15px",
                        py: "7px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Start Discovery
                      </Typography>
                    </CustomButton>
                  </Box>
                  {/* create asset dialog */}
                  <CustomDialog
                    isOpen={isNewAssetDialogOpen}
                    setIsOpen={setIsNewAssetDialogOpen}
                  >
                    <Box
                      overflow="hidden"
                      bgcolor="#0a0a0c"
                      border="1px solid rgb(39, 39, 42)"
                      maxHeight="660px"
                      minHeight="500px"
                      width="530px"
                      borderRadius="15px"
                    >
                      <Box height="100%" maxWidth="530px">
                        {/* header */}
                        <Box>
                          <NewAssetDialogTabsHeader
                            dialogOpenSetter={setIsNewAssetDialogOpen}
                            activeTabSetter={setActiveFeatureTab}
                            activeTab={activeFeatureTab}
                          />
                        </Box>
                        {/* pages */}
                        <Box>
                          {activeFeatureTab === 0 ? (
                            <Box>
                              <NewAssetDialogScopeTab />
                            </Box>
                          ) : (
                            <NewAssetDialogAdvancedTab />
                          )}
                        </Box>
                        {/* footer */}
                        <Box>
                          <NewAssetDialogTabsFooter
                            activeTab={activeFeatureTab}
                            setAssets={setAssets}
                            setIsNewAssetDialogOpen={setIsNewAssetDialogOpen}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </CustomDialog>
                  {/* cloud button */}
                  <Box>
                    <CustomButton
                      color="warning"
                      endIcon={<RxPlus size={15} />}
                      fullWidth
                      sx={{
                        px: "15px",
                        py: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: 0.7,
                        }}
                      >
                        Connect your clouds services
                      </Typography>
                    </CustomButton>
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
          <Box position="absolute" top="230px" right="-285px" zIndex={999998}>
            <TabFeaturesSVGBackground />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AssetsFeaturesDialog;
