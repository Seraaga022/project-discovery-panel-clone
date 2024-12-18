import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OptionalNBC, TabT } from "../../utils/types/NavigationButtonComponent";
import { TbHomeShield } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { RiEditCircleLine } from "react-icons/ri";
import { RiStackLine } from "react-icons/ri";

const Tab = (props: TabT) => {
  const { setActiveTabPosition, setCursorPosition, text } = props;
  const navigate = useNavigate();
  const ref = React.useRef<HTMLElement>(null);

  // the location is the window.location btw
  const location = useLocation();
  const activeTab = window.location.href.split("/")[3];

  // preventing from bugs
  React.useEffect(() => {
    if (location.pathname == "/") {
      setActiveTabPosition({
        width: 126.80000305175781,
        left: 4,
      });
      setCursorPosition({
        width: 126.80000305175781,
        left: 4,
      });
    } else if (location.pathname == "/assets") {
      setActiveTabPosition({
        width: 105.20000457763672,
        left: 133,
      });
      setCursorPosition({
        width: 105.20000457763672,
        left: 133,
      });
    } else if (location.pathname == "/scans") {
      setActiveTabPosition({
        width: 101.17500305175781,
        left: 240,
      });
      setCursorPosition({
        width: 101.17500305175781,
        left: 240,
      });
    } else if (location.pathname == "/templates") {
      setActiveTabPosition({
        width: 124.875,
        left: 343,
      });
      setCursorPosition({
        width: 124.875,
        left: 343,
      });
    }
  }, [location]);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setCursorPosition({
          width,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => {
        if (activeTab === text) return;

        const tab = text;
        if (tab !== "dashboard") navigate(tab);
        else navigate("/");

        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setActiveTabPosition({
          width,
          left: ref.current.offsetLeft,
        });
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        px: "20px",
        zIndex: "10",
        height: "100%",
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "5px",
        bgcolor:
          activeTab === text || (activeTab === "" && text === "dashboard")
            ? "#1b1b1e"
            : "",
        color:
          activeTab === text || (activeTab === "" && text === "dashboard")
            ? "#eeeeee"
            : "#a1a1aa",
        "& .tab-icon": {
          color:
            activeTab === text || (activeTab === "" && text === "dashboard")
              ? "#818cf8"
              : "#52525b",
          transition: "color ease-in 100ms",
        },
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Cursor = ({ position }: { position: OptionalNBC }) => {
  return (
    <Box
      component={motion.div}
      animate={position}
      transition={{
        duration: 0.25,
        type: "spring",
      }}
      position="absolute"
      bgcolor="#151517"
      zIndex="0"
      height="80%"
      borderRadius="6px"
    ></Box>
  );
};

const NavigationButtons = () => {
  const [activeTabPosition, setActiveTabPosition] = React.useState<OptionalNBC>(
    {
      left: 0,
      width: 0,
    }
  );

  const [cursorPosition, setCursorPosition] = React.useState<OptionalNBC>({
    left: 0,
    width: 0,
  });

  return (
    <Box
      mt="2px"
      display="flex"
      height="90%"
      width="fit-content"
      border="1px solid #27272a"
      borderRadius="10px"
      p="4px"
      gap="2px"
      boxSizing="border-box"
      position="relative"
      onMouseLeave={() => {
        setCursorPosition(activeTabPosition);
      }}
    >
      <Tab
        setActiveTabPosition={setActiveTabPosition}
        setCursorPosition={setCursorPosition}
        text="dashboard"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <TbHomeShield className="tab-icon" size={20} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              "&:first-letter": { textTransform: "capitalize" },
              fontWeight: 400,
            }}
          >
            dashboard
          </Typography>
        </Box>
      </Tab>
      <Tab
        setActiveTabPosition={setActiveTabPosition}
        setCursorPosition={setCursorPosition}
        text="assets"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <CgDatabase className="tab-icon" size={20} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              "&:first-letter": { textTransform: "capitalize" },
              fontWeight: 400,
            }}
          >
            assets
          </Typography>
        </Box>
      </Tab>
      <Tab
        setActiveTabPosition={setActiveTabPosition}
        setCursorPosition={setCursorPosition}
        text="scans"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <RiEditCircleLine className="tab-icon" size={20} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              "&:first-letter": { textTransform: "capitalize" },
              fontWeight: 400,
            }}
          >
            scans
          </Typography>
        </Box>
      </Tab>
      <Tab
        setActiveTabPosition={setActiveTabPosition}
        setCursorPosition={setCursorPosition}
        text="templates"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <RiStackLine className="tab-icon" size={20} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              "&:first-letter": { textTransform: "capitalize" },
              fontWeight: 400,
            }}
          >
            templates
          </Typography>
        </Box>
      </Tab>
      <Cursor position={cursorPosition} />
    </Box>
  );
};

export default NavigationButtons;
