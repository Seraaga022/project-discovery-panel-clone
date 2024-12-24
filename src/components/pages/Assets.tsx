import { Box, Button, Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { CgDatabase } from "react-icons/cg";
import { FaSistrix } from "react-icons/fa";
import { HiCubeTransparent, HiOutlineChip } from "react-icons/hi";
import { LuShapes } from "react-icons/lu";
import { RxPlus } from "react-icons/rx";
import { TbScreenshot } from "react-icons/tb";
import { VscCompass } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
import CreateAssetAdvancedTab from "../Assets/CreateAssetAdvancedTab";
import CreateAssetScopeTab from "../Assets/CreateAssetScopeTab";
import CreateAssetTabsFooter from "../Assets/CreateAssetTabsFooter";
import TabFeaturesSVGBackground from "../Assets/TabFeaturesSVGBackground";
import Spinner from "../atoms/Loaders/Spinner";
import CustomDialog from "../atoms/CustomDialog";
import CreateAssetTabsHeader from "../Assets/CreateAssetTabsHeader";
const AssetNavbarItemsCounter = lazy(
  () => import("../Assets/AssetNavbarItemsCounter")
);

const Assets = () => {
  const [activeTab, setActiveTab] = React.useState(
    window.location.href.split("/")[4] || ""
  );
  const [activeFeatureTab, setActiveFeatureTab] = React.useState<number>(0);

  const assetsNavItemsBaseClasses = [
    "asset-groups",
    "inventory",
    "technologies",
  ];
  const assetsNavItems = [
    {
      icon: (
        <CgDatabase
          size={18}
          color={activeTab === "" ? "#818cf8" : "#71717a"}
          className={`${assetsNavItemsBaseClasses[0]}_icon`}
          style={{ transition: "all ease-in 100ms" }}
        />
      ),
      title: "Asset Groups",
      classNameBase: assetsNavItemsBaseClasses[0],
      url: "",
    },
    {
      icon: (
        <LuShapes
          size={18}
          color={activeTab === "inventory" ? "#818cf8" : "#71717a"}
          className={`${assetsNavItemsBaseClasses[1]}_icon`}
          style={{ transition: "all ease-in 100ms" }}
        />
      ),
      title: "Inventory",
      classNameBase: assetsNavItemsBaseClasses[1],
      url: "inventory",
    },
    {
      icon: (
        <HiOutlineChip
          size={18}
          color={activeTab === "technologies" ? "#818cf8" : "#71717a"}
          className={`${assetsNavItemsBaseClasses[2]}_icon`}
          style={{ transition: "all ease-in 100ms" }}
        />
      ),
      title: "Technologies",
      classNameBase: assetsNavItemsBaseClasses[2],
      url: "technologies",
    },
  ];
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

  const [assets, setAssets] = React.useState<number[]>([]);

  const [isNewAssetDialogOpen, setIsNewAssetDialogOpen] =
    React.useState<boolean>(false);

  return (
    <Box>
      <Box>
        {assets.length > 0 ? (
          <>
            {/* assets navbar */}
            <Box mb="109px">
              <Box
                zIndex={99}
                component={"nav"}
                sx={{
                  borderBottom: "1px solid #202022",
                  minHeight: "44px",
                  bgcolor: "#09090b",
                  position: "fixed",
                  width: "100%",
                  top: "65px",
                }}
              >
                <Box display="flex" height="44px" px="15px" gap="15px">
                  {assetsNavItems.map((i) => {
                    const iconClass = `${i.classNameBase}_icon`;
                    const textClass = `${i.classNameBase}_text`;
                    return (
                      <Box
                        sx={{
                          transition: "all ease-in 100ms",
                          px: "10px",
                          borderBottom:
                            activeTab === i.url
                              ? "2px solid #6366f1"
                              : "2px solid transparent",
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            [`& .${iconClass}`]: {
                              color: "#a1a1aa !important",
                            },
                            [`& .${textClass}`]: {
                              color: "#e4e4e7 !important",
                            },
                          },
                        }}
                        onClick={() => setActiveTab(i.url)}
                      >
                        <Link to={i.url}>
                          <Box display="flex" gap="7px" alignItems="center">
                            {/* icon */}
                            <Box display="flex" alignItems="center">
                              {i.icon}
                            </Box>
                            {/* text */}
                            <Box display="flex" justifyContent="center">
                              <Typography
                                className={textClass}
                                variant="subtitle2"
                                sx={{
                                  color:
                                    activeTab === i.url ? "#eeeeee" : "#a1a1aa",
                                  fontSize: "13px",
                                  letterSpacing: 0.5,
                                  fontWeight: activeTab === i.url ? 600 : 500,
                                  transition: "all ease-in 100ms",
                                }}
                              >
                                {i.title}
                              </Typography>
                            </Box>
                            {/* count */}
                            <Box ml="2px">
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Suspense fallback={<Spinner />}>
                                  <AssetNavbarItemsCounter
                                    assetType={i.title.toLocaleLowerCase()}
                                  />
                                </Suspense>
                              </Box>
                            </Box>
                          </Box>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
            {/* children */}
            <Box>
              <Outlet />
            </Box>
          </>
        ) : (
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
                      variant="subtitle2"
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
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#848485", fontSize: "15px" }}
                    >
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
                    {/* buttons */}
                    <Box mt="20px">
                      <Box display="flex" justifyContent="center" gap="8px">
                        {/* 'domain or ip' button */}
                        <Box>
                          <Button
                            onClick={() => setIsNewAssetDialogOpen(true)}
                            sx={{
                              width: "100%",
                              bgcolor: "#eeeeee",
                              "&:hover": { bgcolor: "#d6d6d6" },
                              textTransform: "none",
                              color: "#18181b",
                              px: "15px",
                              py: "7px",
                              borderRadius: "6px",
                            }}
                          >
                            <Box display="flex" gap="8px">
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    letterSpacing: 0.5,
                                  }}
                                >
                                  Add domain or IP
                                </Typography>
                              </Box>
                              <Box>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  height="100%"
                                >
                                  <RxPlus size={18} />
                                </Box>
                              </Box>
                            </Box>
                          </Button>
                        </Box>
                        {/* create asset dialog */}
                        <CustomDialog
                          show={isNewAssetDialogOpen}
                          setter={setIsNewAssetDialogOpen}
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
                                <CreateAssetTabsHeader
                                  dialogOpenSetter={setIsNewAssetDialogOpen}
                                  activeTabSetter={setActiveFeatureTab}
                                  activeTab={activeFeatureTab}
                                />
                              </Box>
                              {/* pages */}
                              <Box>
                                {activeFeatureTab === 0 ? (
                                  <Box>
                                    <CreateAssetScopeTab />
                                  </Box>
                                ) : (
                                  <Box
                                    mx="25px"
                                    boxSizing="border-box"
                                    maxHeight="300px"
                                    pt="30px"
                                    sx={{
                                      overflowY: "scroll",
                                      "&::-webkit-scrollbar": {
                                        width: "15px",
                                        "&-thumb": {
                                          bgcolor: "#7b7b7b",
                                        },
                                        "&-track": {
                                          bgcolor: "#424242",
                                        },
                                      },
                                    }}
                                  >
                                    <CreateAssetAdvancedTab />
                                  </Box>
                                )}
                              </Box>
                              {/* footer */}
                              <Box>
                                <CreateAssetTabsFooter
                                  activeTab={activeFeatureTab}
                                  setAssets={setAssets}
                                  setIsNewAssetDialogOpen={
                                    setIsNewAssetDialogOpen
                                  }
                                />
                              </Box>
                            </Box>
                          </Box>
                        </CustomDialog>
                        {/* 'cloud' button */}
                        <Box>
                          <Button
                            color="warning"
                            sx={{
                              width: "100%",
                              bgcolor: "#38270b",
                              "&:hover": { bgcolor: "#442f0b" },
                              textTransform: "none",
                              color: "#18181b",
                              px: "15px",
                              py: "8px",
                              borderRadius: "6px",
                            }}
                          >
                            <Box display="flex" alignItems="center" gap="8px">
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    letterSpacing: 0.7,
                                    color: "#f59e0b",
                                  }}
                                >
                                  Connect your clouds services
                                </Typography>
                              </Box>
                              <Box>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  height="100%"
                                >
                                  <RxPlus size={15} color="#f59e0b" />
                                </Box>
                              </Box>
                            </Box>
                          </Button>
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
                  right="-285px"
                  zIndex={999998}
                >
                  <TabFeaturesSVGBackground />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Assets;
