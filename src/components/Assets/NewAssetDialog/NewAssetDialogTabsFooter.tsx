import {
  Box,
  Checkbox,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import React from "react";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaSlack } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { RxPlus } from "react-icons/rx";
import { WiTime4 } from "react-icons/wi";
import CustomButton from "../../Common/CustomButton/CustomButton";
import useMenu from "../../../hooks/ui/useMenu";
import useNewAssetDiscoveryFrequencyManagement from "../../../hooks/logical/useNewAssetDiscoveryFrequency";
import {
  DialogTabsFooterProps,
  TimeMenuItemsProps,
} from "@appTypes/types/newAssetDialog";

const NewAssetDialogTabsFooter: React.FC<DialogTabsFooterProps> = ({
  setIsNewAssetDialogOpen,
  setAssets,
  activeTab,
}) => {
  // discovery time menu
  const {
    anchorEl: discoveryTimeMenuAnchorEl,
    IS_MENU_OPEN: IS_DISCOVERY_TIME_MENU_OPEN,
    handleMenuTriggerClick: handleDiscoveryTimeInputClick,
    handleMenuClose: handleDiscoveryTimeMenuClose,
  } = useMenu();

  // discovery alert menu
  const {
    anchorEl: discoveryAlertMenuAnchorEl,
    IS_MENU_OPEN: IS_DISCOVERY_ALERT_CONTROL_MENU_OPEN,
    handleMenuTriggerClick: handleDiscoveryAlertMenuTriggerClick,
    handleMenuClose: handleDiscoveryAlertMenuClose,
  } = useMenu();

  const {
    activeFrequencyInterval,
    setActiveFrequencyInterval,
    discoveryDays,
    setDiscoveryDays,
    discoveryTime,
    setDiscoveryTime,
    clearCutomTimeState,
    getFullDiscoveryTime,
  } = useNewAssetDiscoveryFrequencyManagement();

  const TimeMenuItems = ({
    hour,
    minute,
    dayTime,
    value,
    ...props
  }: TimeMenuItemsProps) => {
    const ref = React.useRef<HTMLInputElement>(null);

    const handleMenuItemClick = () => {
      if (!ref.current) return;
      else if (hour)
        setDiscoveryTime({
          ...discoveryTime,
          hour: value,
          minute: discoveryTime.minute === "" ? "00" : discoveryTime.minute,
          dayTime: "AM",
        });
      else if (minute)
        setDiscoveryTime({
          ...discoveryTime,
          minute: value,
          hour: discoveryTime.hour === "" ? "12" : discoveryTime.hour,
          dayTime: "AM",
        });
      else if (dayTime)
        setDiscoveryTime({
          ...discoveryTime,
          dayTime: value,
          minute: discoveryTime.minute === "" ? "00" : discoveryTime.minute,
          hour: discoveryTime.hour === "" ? "12" : discoveryTime.hour,
        });

      ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <Box
        ref={ref}
        onClick={handleMenuItemClick}
        {...props}
        sx={{
          "&:hover": { bgcolor: "#313131" },
          borderRadius: "5px",
          px: "10px",
          py: "5px",
          transition: "all ease-in 100ms",
          cursor: "pointer",
          minWidth: "20px",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          {props.children}
        </Box>
      </Box>
    );
  };

  const frequentyDaysItems = ["S", "M", "T", "W", "T", "F", "S"];

  const timeDropDownHours = [
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
  ];
  const timeDropDownMinutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];
  const DISCOVERY_TIME_FORMAT = "utc";

  const [isDiscoveryAlertChecked, setIsDiscoveryAlertChecked] =
    React.useState<boolean>(true);

  return (
    <>
      {/* frequency section */}
      <Box mt="5px">
        <Box px="25px" boxSizing="border-box">
          <Box
            bgcolor="rgba(24,24,27,.6)"
            display="flex"
            boxSizing="border-box"
            p="10px"
            border="1px solid rgb(39, 39, 42)"
            borderRadius="5px"
          >
            {/* left */}
            <Box flex={0.5}>
              <Box display="flex" alignItems="center" height="100%">
                <Typography
                  sx={{
                    color: "#a1a1aa",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Set frequency
                </Typography>
              </Box>
            </Box>
            {/* right */}
            <Box flex={1}>
              <Box
                display="flex"
                gap="2px"
                justifyContent="end"
                sx={{
                  "& > div": {
                    py: "4px",
                    px: "9px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  onClick={() => setActiveFrequencyInterval(null)}
                  sx={{
                    "&:hover": {
                      "& > .item_text": {
                        color: "#e4e4e7",
                      },
                    },
                    bgcolor: activeFrequencyInterval === null ? "#232328" : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="item_text"
                    sx={{
                      color:
                        activeFrequencyInterval === null ? "#eee" : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      transition: "all ease 90ms",
                    }}
                  >
                    None
                  </Typography>
                </Box>
                <Box
                  onClick={() => setActiveFrequencyInterval("daily")}
                  sx={{
                    "&:hover": {
                      "& > .item_text": {
                        color: "#e4e4e7",
                      },
                    },
                    bgcolor:
                      activeFrequencyInterval === "daily" ? "#232328" : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="item_text"
                    sx={{
                      color:
                        activeFrequencyInterval === "daily"
                          ? "#eee"
                          : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      transition: "all ease 90ms",
                    }}
                  >
                    Daily
                  </Typography>
                </Box>
                <Box
                  onClick={() => setActiveFrequencyInterval("weekly")}
                  sx={{
                    "&:hover": {
                      "& > .item_text": {
                        color: "#e4e4e7",
                      },
                    },
                    bgcolor:
                      activeFrequencyInterval === "weekly" ? "#232328" : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="item_text"
                    sx={{
                      color:
                        activeFrequencyInterval === "weekly"
                          ? "#eee"
                          : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      transition: "all ease 90ms",
                    }}
                  >
                    Weekly
                  </Typography>
                </Box>
                <Box
                  onClick={() => setActiveFrequencyInterval("monthly")}
                  sx={{
                    "&:hover": {
                      "& > .item_text": {
                        color: "#e4e4e7",
                      },
                    },
                    bgcolor:
                      activeFrequencyInterval === "monthly" ? "#232328" : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="item_text"
                    sx={{
                      color:
                        activeFrequencyInterval === "monthly"
                          ? "#eee"
                          : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      transition: "all ease 90ms",
                    }}
                  >
                    Monthly
                  </Typography>
                </Box>
                <Box
                  onClick={() => setActiveFrequencyInterval("custom")}
                  sx={{
                    "&:hover": {
                      "& > .item_text": {
                        color: "#e4e4e7",
                      },
                    },
                    bgcolor:
                      activeFrequencyInterval === "custom" ? "#232328" : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="item_text"
                    sx={{
                      color:
                        activeFrequencyInterval === "custom"
                          ? "#eee"
                          : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      transition: "all ease 90ms",
                    }}
                  >
                    Custom
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* custom asset frequency times */}
      <Box
        mt="15px"
        display={activeFrequencyInterval === "custom" ? "flex" : "none"}
        boxSizing="border-box"
        px="25px"
        height="25px"
      >
        <Stack spacing={2.5} direction="row" height="100%">
          {/* title */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{
                color: "rgb(163 163 163/1)",
                fontSize: "12px",
              }}
            >
              Set repeat
            </Typography>
          </Box>
          {/* days */}
          <Box>
            <Stack spacing={1.9} direction="row">
              {frequentyDaysItems.map((d, index) => (
                <Box
                  borderRadius="9999px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="25px"
                  height="23px"
                  maxWidth="25px"
                  maxHeight="23px"
                  boxSizing="border-box"
                  sx={{
                    "&:hover": {
                      bgcolor: "#262626",
                    },
                    cursor: "pointer",
                    userSelect: "none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: discoveryDays[index]
                      ? "rgb(212 212 212/1)"
                      : "rgb(64 64 64/1)",
                  }}
                  onClick={() =>
                    setDiscoveryDays(
                      discoveryDays.map((item, idx) =>
                        idx === index ? !item : item
                      )
                    )
                  }
                >
                  <Typography
                    sx={{
                      color: discoveryDays[index]
                        ? "rgb(212 212 212/1)"
                        : "rgb(115 115 115/1)",
                      fontSize: "12px",
                    }}
                  >
                    {d}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          {/* time */}
          <Box
            height="100%"
            border="1px solid rgb(38 38 38/1)"
            borderRadius="5px"
          >
            <Box
              display="flex"
              justifyContent="end"
              width="115px"
              height="100%"
              position="relative"
            >
              {/* time box */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="96px"
                height="100%"
              >
                <Grid2
                  container
                  alignItems="center"
                  width="90%"
                  maxWidth="90%"
                  borderRadius="6px"
                  position="relative"
                  pl="4px"
                  id="team-manage-trigger"
                  aria-controls={
                    IS_DISCOVERY_TIME_MENU_OPEN ? "team-manage-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={
                    IS_DISCOVERY_TIME_MENU_OPEN ? "true" : undefined
                  }
                  onClick={handleDiscoveryTimeInputClick}
                  sx={{
                    height: IS_DISCOVERY_TIME_MENU_OPEN ? "110%" : "100%",
                    top: IS_DISCOVERY_TIME_MENU_OPEN ? "-1px" : "",
                    bgcolor: "",
                    "&:hover": {
                      bgcolor: IS_DISCOVERY_TIME_MENU_OPEN ? "#141414" : "",
                    },
                  }}
                >
                  {/* input */}
                  <Grid2
                    size={10}
                    sx={{
                      "& input": {
                        maxWidth: "90%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#dcdcdc",
                        paddingLeft: "5px",
                      },
                    }}
                  >
                    <input
                      type="text"
                      title="time"
                      placeholder="Set time"
                      value={
                        discoveryTime.hour !== ""
                          ? discoveryTime.hour +
                            ":" +
                            discoveryTime.minute +
                            " " +
                            discoveryTime.dayTime
                          : ""
                      }
                    />
                  </Grid2>
                  {/* icon */}
                  <Grid2 size={2}>
                    <Box
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      {getFullDiscoveryTime().length > 0 ? (
                        <Box
                          onClick={(event) => {
                            event.stopPropagation();
                            clearCutomTimeState();
                          }}
                          sx={{
                            opacity: 0.4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all ease-in 90ms",
                            "&:hover > *": {
                              opacity: 0.6,
                            },
                          }}
                        >
                          <IoCloseCircleSharp
                            color="rgb(163 163 163/1)"
                            size={19}
                          />
                        </Box>
                      ) : (
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            "& svg": {
                              width: "20px",
                              aspectRatio: 1 / 1,
                            },
                          }}
                        >
                          <WiTime4 color="rgb(163 163 163/1)" opacity={0.4} />
                        </Box>
                      )}
                    </Box>
                  </Grid2>
                </Grid2>
                <Menu
                  id="team-manage-menu"
                  anchorEl={discoveryTimeMenuAnchorEl}
                  open={IS_DISCOVERY_TIME_MENU_OPEN}
                  onClose={handleDiscoveryTimeMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "team-manage-trigger",
                  }}
                  sx={{
                    top: activeTab == 0 ? "-125px" : "-161px",
                    "& .MuiPaper-root": {
                      bgcolor: "#1f1f1f",
                      color: "#fafafa",
                      borderRadius: "7px",
                      py: "5px",
                      "& .MuiMenu-list": {
                        padding: "4px",
                      },
                      "& *::-webkit-scrollbar": {
                        width: "8px",
                        "&-thumb": {
                          bgcolor: "#848484",
                        },
                      },
                    },
                  }}
                >
                  <Stack direction="row" height="250px" maxHeight="250px">
                    {/* hours col */}
                    <Box
                      sx={{
                        overflowY: "scroll",
                        position: "relative",
                      }}
                    >
                      <Stack px="2px">
                        {timeDropDownHours.map((h) => (
                          <TimeMenuItems
                            hour
                            value={h}
                            bgcolor={discoveryTime.hour === h ? "#111a2c" : ""}
                          >
                            <Typography
                              sx={{
                                color: "#eee",
                                fontSize: "13px",
                              }}
                            >
                              {h}
                            </Typography>
                          </TimeMenuItems>
                        ))}
                      </Stack>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        width: ".3px",
                        bgcolor: "#848484",
                      }}
                    />
                    {/* minutes col */}
                    <Box
                      sx={{
                        overflowY: "scroll",
                        position: "relative",
                      }}
                    >
                      <Stack px="2px">
                        {timeDropDownMinutes.map((m) => (
                          <TimeMenuItems
                            minute
                            value={m}
                            bgcolor={
                              discoveryTime.minute === m ? "#111a2c" : ""
                            }
                          >
                            <Typography
                              sx={{
                                color: "#eee",
                                fontSize: "13px",
                              }}
                            >
                              {m}
                            </Typography>
                          </TimeMenuItems>
                        ))}
                      </Stack>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        width: ".3px",
                        bgcolor: "#848484",
                      }}
                    />
                    {/* am OR pm */}
                    <Box>
                      <Stack spacing={0.1} px="2px">
                        {/* AM */}
                        <TimeMenuItems
                          dayTime
                          value="AM"
                          bgcolor={
                            discoveryTime.dayTime === "AM" ? "#111a2c" : ""
                          }
                        >
                          <Typography
                            sx={{
                              color: "#eee",
                              fontSize: "13px",
                            }}
                          >
                            AM
                          </Typography>
                        </TimeMenuItems>
                        {/* PM */}
                        <TimeMenuItems
                          dayTime
                          value="PM"
                          bgcolor={
                            discoveryTime.dayTime === "PM" ? "#111a2c" : ""
                          }
                        >
                          <Typography
                            sx={{
                              color: "#eee",
                              fontSize: "13px",
                            }}
                          >
                            PM
                          </Typography>
                        </TimeMenuItems>
                      </Stack>
                    </Box>
                  </Stack>
                </Menu>
              </Box>
              {/* time format */}
              <Box height="100%" px="5px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Typography
                    sx={{
                      color: "rgb(64 64 64/1)",
                      fontSize: "10px",
                      fontWeight: 400,
                      userSelect: "none",
                    }}
                  >
                    {DISCOVERY_TIME_FORMAT.toUpperCase()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* alerts management and buttons */}
      <Box mt="15px" pb="20px" mb="10px">
        <Box
          display="flex"
          justifyContent="end"
          px="25px"
          boxSizing="border-box"
        >
          {/* alerts management */}
          <Box
            mr="auto"
            id="alert-manage-trigger"
            aria-controls={
              IS_DISCOVERY_ALERT_CONTROL_MENU_OPEN
                ? "alert-manage-menu"
                : undefined
            }
            aria-haspopup="true"
            aria-expanded={
              IS_DISCOVERY_ALERT_CONTROL_MENU_OPEN ? "true" : undefined
            }
            onClick={handleDiscoveryAlertMenuTriggerClick}
            sx={{
              cursor: "pointer",
            }}
          >
            <Box
              display="flex"
              justifyContent="end"
              alignItems="center"
              border="1px solid rgb(39, 39, 42)"
              borderRadius="8px"
              py="8px"
              px="12px"
              width="130px"
              sx={{
                scale: 0.85,
              }}
            >
              {/* icons */}
              <Box mr="auto" display="flex" alignItems="center" gap="8px">
                {/* slack icon */}
                <Box display="flex" alignItems="center">
                  <FaSlack color="white" size={18} />
                </Box>
                {/* teams icon */}
                <Box display="flex" alignItems="center">
                  <BsMicrosoftTeams color="white" size={18} />
                </Box>
              </Box>
              {/* text and status */}
              <Box display="flex" alignItems="center">
                {/* Alert text */}
                <Box mr="8px">
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  >
                    Alerts
                  </Typography>
                </Box>
                {/* alert status */}
                <Box
                  boxSizing="border-box"
                  p="2px"
                  px="7px"
                  bgcolor={isDiscoveryAlertChecked ? "#818cf8" : "#4e4e4f"}
                  borderRadius="7px"
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "13px",
                      }}
                    >
                      {isDiscoveryAlertChecked ? "On" : "Off"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* alert drop down */}
          <Menu
            id="alert-manage-menu"
            anchorEl={discoveryAlertMenuAnchorEl}
            open={IS_DISCOVERY_ALERT_CONTROL_MENU_OPEN}
            onClose={handleDiscoveryAlertMenuClose}
            MenuListProps={{
              "aria-labelledby": "alert-manage-trigger",
            }}
            sx={{
              top:
                activeFrequencyInterval === "custom"
                  ? activeTab == 0
                    ? "-90px"
                    : "-120px"
                  : activeTab == 0
                  ? "-120px"
                  : "-120px",
              mt: "7px",
              "& .MuiPaper-root": {
                minWidth: "275px",
                bgcolor: "#09090b",
                color: "#fafafa",
                border: "1px solid #27272a",
                borderRadius: "7px",
                "& .MuiMenu-list": {
                  p: 0,
                },
              },
            }}
          >
            <MenuItem
              sx={{
                bgcolor: "#131316",
                "&:hover": {
                  bgcolor: "#27272a",
                  display: "flex",
                  alignItems: "center",
                },
                maxHeight: "40px",
              }}
              onClick={() =>
                setIsDiscoveryAlertChecked(!isDiscoveryAlertChecked)
              }
            >
              {/* left */}
              <Box flex={0.2}>
                <Checkbox
                  size="small"
                  onChange={() =>
                    setIsDiscoveryAlertChecked(!isDiscoveryAlertChecked)
                  }
                  checked={isDiscoveryAlertChecked}
                  defaultChecked
                  sx={{
                    borderRadius: "5px",
                    "&.MuiCheckbox-root": {
                      m: 0,
                      p: 0,
                    },
                    "& .MuiTouchRipple-root": {
                      borderRadius: "999px",
                    },
                  }}
                />
              </Box>
              {/* middle */}
              <Box flex={0.8}>
                <Box display="flex" gap="10px">
                  {/* icon */}
                  <Box
                    p="3px"
                    boxSizing="border-box"
                    display="flex"
                    alignItems="center"
                    borderRadius="5px"
                    bgcolor="#18181b"
                    border="1px solid #27272a"
                  >
                    <FiMail size={15} color="#71717a" />
                  </Box>
                  {/* text */}
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={{
                        color: "#a3a3a3",
                        fontSize: "12px",
                      }}
                    >
                      Email Notification
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* right */}
              <Box flex={0.2}>
                <Typography
                  sx={{
                    color: "#949495",
                    fontSize: "12px",
                    fontFamily: "consolas",
                  }}
                >
                  ALERTS
                </Typography>
              </Box>
            </MenuItem>
            <Divider
              color="#27272a"
              sx={{
                "&.MuiDivider-root": {
                  m: 0,
                  p: 0,
                },
              }}
            />
            <MenuItem
              sx={{
                bgcolor: "#09090b",
                "&:hover": {
                  bgcolor: "#27272a",
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#a3a3a3",
                  fontSize: "12px",
                }}
              >
                Set up new integration
              </Typography>
              <RxPlus
                size={12}
                color="#a3a3a3"
                style={{
                  alignSelf: "center",
                  paddingBottom: "1px",
                  paddingLeft: "4px",
                }}
              />
            </MenuItem>
          </Menu>
          {/* buttons */}
          <Box>
            <Box display="flex" gap="15px">
              {/* cancel button */}
              <Box>
                <CustomButton
                  onClick={() => setIsNewAssetDialogOpen(false)}
                  color="inherit"
                  sx={{
                    border: "1px solid #27272a",
                    py: "7px",
                    px: "15px",
                    "&:hover": {
                      bgcolor: "#27272a",
                    },
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        color: "#fafafa",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: 0.6,
                      }}
                    >
                      Cancel
                    </Typography>
                  </Box>
                </CustomButton>
              </Box>
              {/* add button */}
              <Box>
                <CustomButton
                  onClick={() => setAssets([0, 1])}
                  sx={{
                    bgcolor: "#eeeeee",
                    "&:hover": {
                      bgcolor: "#d6d6d6",
                    },
                    color: "#18181b",
                    px: "15px",
                    py: "8px",
                  }}
                >
                  <Box display="flex" gap="8px">
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "#18181b",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Add Assets
                      </Typography>
                    </Box>
                  </Box>
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewAssetDialogTabsFooter;
