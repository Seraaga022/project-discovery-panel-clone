import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { OptionalNBC, TabT } from "../../utils/types/NavigationButtonComponent";
import { TbHomeShield } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { RiEditCircleLine } from "react-icons/ri";
import { RiStackLine } from "react-icons/ri";

const Tab = (props: TabT) => {
  const navigate = useNavigate();
  const ref = React.useRef<HTMLElement>(null);
  const activeTab = window.location.pathname
    .split("")
    .filter((i) => i !== "/")
    .join("");

  // preventing from bug
  React.useEffect(() => {
    if (window.location.pathname == "/") {
      props.setActivePosition({
        width: 127.76250457763672,
        left: 4,
        opacity: 1,
      });
      props.setPosition({
        width: 127.76250457763672,
        left: 4,
        opacity: 1,
      });
    }
  }, [window.location.pathname]);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        props.setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => {
        if (activeTab === props.text) return;

        const tab = props.text;
        if (tab !== "dashboard") navigate(tab);
        else navigate("");

        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        props.setActivePosition({
          width,
          opacity: 1,
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
          activeTab === props.text ||
          (activeTab === "" && props.text === "dashboard")
            ? "#1b1b1e"
            : "",
        color:
          activeTab === props.text ||
          (activeTab === "" && props.text === "dashboard")
            ? "#eeeeee"
            : "#a1a1aa",
        "& .tab-icon": {
          color:
            activeTab === props.text ||
            (activeTab === "" && props.text === "dashboard")
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
        duration: 0.19,
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
  const [position, setPosition] = React.useState<OptionalNBC>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activePosition, setActivePosition] = React.useState<OptionalNBC>({
    left: 0,
    width: 0,
    opacity: 0,
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
        setPosition(activePosition);
      }}
    >
      <Tab
        setPosition={setPosition}
        setActivePosition={setActivePosition}
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
        setPosition={setPosition}
        setActivePosition={setActivePosition}
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
        setPosition={setPosition}
        setActivePosition={setActivePosition}
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
        setPosition={setPosition}
        setActivePosition={setActivePosition}
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
      <Cursor position={position} />
    </Box>
  );
};

export default NavigationButtons;
