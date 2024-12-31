import { Box, Typography } from "@mui/material";
import React from "react";
import { CgDatabase } from "react-icons/cg";
import { HiOutlineChip } from "react-icons/hi";
import { LuShapes } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import { AssetsQnyT } from "@appTypes/types/newAssetDialog";
import AssetsFeaturesDialog from "../Assets/AssetsFeaturesDialog";

const Assets = () => {
  const [activeTab, setActiveTab] = React.useState(
    window.location.href.split("/")[4] || ""
  );

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
      title: "Overview",
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

  const [assets, setAssets] = React.useState<AssetsQnyT>([]);

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
                <Box
                  display="flex"
                  height="44px"
                  px="15px"
                  gap="15px"
                  alignItems="end"
                >
                  {assetsNavItems.map((i) => {
                    const iconClass = `${i.classNameBase}_icon`;
                    const textClass = `${i.classNameBase}_text`;
                    return (
                      <Link to={i.url}>
                        <Box
                          sx={{
                            transition: "all ease-in 100ms",
                            px: "10px",
                            pb: "10px",
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
                          <Box display="flex" gap="7px" alignItems="center">
                            {/* icon */}
                            <Box display="flex" alignItems="center">
                              {i.icon}
                            </Box>
                            {/* text */}
                            <Box display="flex" justifyContent="center">
                              <Typography
                                className={textClass}
                                sx={{
                                  color:
                                    activeTab === i.url ? "#eeeeee" : "#a1a1aa",
                                  fontSize: "12.5px",
                                  letterSpacing: 0.5,
                                  fontWeight: activeTab === i.url ? 500 : 400,
                                  transition: "all ease-in 100ms",
                                }}
                              >
                                {i.title}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
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
          <AssetsFeaturesDialog setAssets={setAssets} />
        )}
      </Box>
    </Box>
  );
};

export default Assets;
