import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import CustomTooltip from "../atoms/CustomTooltip";
import { FiInfo } from "react-icons/fi";
import React from "react";

const NewAssetDialogAdvancedTab = () => {
  const [isPassiveSubdomainChecked, setIsPassiveSubdomainChecked] =
    React.useState<boolean>(true);

  const [activeSubdomainCheckboxItems, setActiveSubdomainCheckboxItems] =
    React.useState([true, true]);

  const [detectWebTechCheckboxItems, setDetectWebTechCheckboxItems] =
    React.useState([false, true]);

  const [identifyOpenPortsLimits, setIdentifyOpenPortsLimits] =
    React.useState(100);

  const handleIdentifyOpenPortsLimitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdentifyOpenPortsLimits(
      Number((event.target as HTMLInputElement).value)
    );
  };

  const SWITCH_STYLES = {
    scale: 0.8,
    mx: "-16px",
    display: "flex",
    alignItems: "center",
    "& .Mui-disabled": {
      "& .MuiSwitch-thumb": {
        bgcolor: "#8a8a8b",
      },
      "& + .MuiSwitch-track": {
        bgcolor: "#242425 !important",
        opacity: ".8 !important",
      },
    },
    "& .Mui-checked": {
      "& .MuiSwitch-thumb": {
        bgcolor: "#6366f1",
      },
      "& + .MuiSwitch-track": {
        bgcolor: "#333333 !important",
        opacity: "1 !important",
      },
    },
    "& .MuiSwitch-thumb": {
      ml: "7px",
      mt: "3px",
      bgcolor: "#eeeeee",
      width: "14px",
      height: "14px",
      boxSizing: "border-box",
    },
    "& .MuiTouchRipple-root": {
      bgcolor: "transparent",
      height: "100%",
    },
    "& .MuiSwitch-track": {
      m: "0",
      bgcolor: "#333333",
      opacity: 1,
      height: "23px",
      pr: "42px",
      borderRadius: "9999px",
      boxSizing: "border-box",
    },
  };

  const FORM_CONTROL_LABEL_STYLES = {
    "& .MuiTypography-root": {
      color: "#dedede",
      ml: "20px",
      fontSize: "12px",
      "&.Mui-disabled": {
        color: "#a6a6a6",
        opacity: 0.7,
      },
    },
  };

  return (
    <Stack>
      {/* passive subdomain discovery */}
      <Box
        sx={{
          "&:hover": { bgcolor: "#141415" },
          pt: "7px",
          pb: "10px",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <Box
          display="flex"
          onClick={() =>
            setIsPassiveSubdomainChecked(!isPassiveSubdomainChecked)
          }
          sx={{ cursor: "pointer" }}
        >
          {/* left */}
          <Box flex={0.03}>
            <Box display="flex" alignItems="start" justifyContent="center">
              <Checkbox
                onChange={() =>
                  setIsPassiveSubdomainChecked(!isPassiveSubdomainChecked)
                }
                checked={isPassiveSubdomainChecked}
                defaultChecked
                size="small"
                color="primary"
              />
            </Box>
          </Box>
          {/* right */}
          <Box flex={1.2}>
            <Stack spacing={1}>
              {/* title */}
              <Box display="flex" alignItems="center" gap="6px" pt="5px">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(229 229 229/1)",
                    fontSize: "13px",
                  }}
                >
                  Passive Subdomain Discovery
                </Typography>
                {/* detail icon */}
                <CustomTooltip
                  title={
                    <Box maxWidth="200px" pr="20px">
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "11px",
                        }}
                      >
                        Passively discovers subdomains for the provided root
                        domains by querying our Chaos DNS dataset. Integration
                        with 3rd party sources coming soon.
                      </Typography>
                    </Box>
                  }
                  placement="right"
                >
                  <Box display="flex" alignItems="center">
                    <FiInfo size={14} color="rgb(161 161 170/1)" />
                  </Box>
                </CustomTooltip>
              </Box>
              {/* description */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(161 161 170/1)",
                    fontSize: "11.7px",
                  }}
                >
                  Passive Subdomain Discovery for any provided root domains (for
                  example: app.hooli.com, dev.hooli.com) using Chaos. Support is
                  not available for URL, IP, or CIDR.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Divider
        color="#27272a"
        variant="middle"
        sx={{
          "&.MuiDivider-root": {
            m: 3,
            p: 0,
          },
        }}
      />
      {/* active subdomain discovery */}
      <Box
        sx={{
          "&:hover": { bgcolor: "#141415" },
          pt: "7px",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          {/* main checkbox & text's */}
          <Box display="flex">
            {/* left */}
            <Box flex={0.03}>
              <Box display="flex" alignItems="start" justifyContent="center">
                <Checkbox
                  onChange={() =>
                    activeSubdomainCheckboxItems[0]
                      ? activeSubdomainCheckboxItems[0]
                        ? setActiveSubdomainCheckboxItems([false, false])
                        : setActiveSubdomainCheckboxItems([true, true])
                      : activeSubdomainCheckboxItems[1]
                      ? setActiveSubdomainCheckboxItems([false, false])
                      : setActiveSubdomainCheckboxItems([true, true])
                  }
                  checked={
                    activeSubdomainCheckboxItems[0] ||
                    activeSubdomainCheckboxItems[1]
                  }
                  defaultChecked
                  size="small"
                  color="primary"
                />
              </Box>
            </Box>
            {/* right */}
            <Box flex={1.2}>
              <Stack spacing={1}>
                {/* title */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap="6px"
                  pt="5px"
                  onClick={() =>
                    activeSubdomainCheckboxItems[0]
                      ? activeSubdomainCheckboxItems[0]
                        ? setActiveSubdomainCheckboxItems([false, false])
                        : setActiveSubdomainCheckboxItems([true, true])
                      : activeSubdomainCheckboxItems[1]
                      ? setActiveSubdomainCheckboxItems([false, false])
                      : setActiveSubdomainCheckboxItems([true, true])
                  }
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(229 229 229/1)",
                      fontSize: "13px",
                    }}
                  >
                    Active Subdomain Discovery
                  </Typography>
                  {/* detail icon */}
                  <CustomTooltip
                    title={
                      <Box maxWidth="200px" pr="20px">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "11px",
                          }}
                        >
                          Actively discovers subdomains for the provided root
                          domains by brute-forcing common subdomain names using
                          dnsx. Custom wordlist support coming soon.
                        </Typography>
                      </Box>
                    }
                    placement="right"
                  >
                    <Box display="flex" alignItems="center">
                      <FiInfo size={14} color="rgb(161 161 170/1)" />
                    </Box>
                  </CustomTooltip>
                </Box>
                {/* description */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(161 161 170/1)",
                      fontSize: "11.7px",
                    }}
                  >
                    Brute force common subdomain names for any provided root
                    domains using a predefined list of common wordlist.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          {/* checkboxes */}
          <Box flex={1} px="50px" mt="10px">
            <Box display="flex" flexDirection="column">
              {/* first switch */}
              <Box>
                <FormControlLabel
                  label="DNS Bruteforce"
                  sx={FORM_CONTROL_LABEL_STYLES}
                  control={
                    <Switch
                      onChange={() =>
                        setActiveSubdomainCheckboxItems([
                          !activeSubdomainCheckboxItems[0],
                          activeSubdomainCheckboxItems[1],
                        ])
                      }
                      disabled={
                        !activeSubdomainCheckboxItems[0] &&
                        !activeSubdomainCheckboxItems[1]
                      }
                      checked={activeSubdomainCheckboxItems[0]}
                      sx={SWITCH_STYLES}
                    />
                  }
                />
              </Box>
              {/* second switch */}
              <Box>
                <FormControlLabel
                  label="DNS Permutation"
                  sx={{
                    position: "relative",
                    top: "-8px",
                    ...FORM_CONTROL_LABEL_STYLES,
                  }}
                  control={
                    <Switch
                      onChange={() =>
                        setActiveSubdomainCheckboxItems([
                          activeSubdomainCheckboxItems[0],
                          !activeSubdomainCheckboxItems[1],
                        ])
                      }
                      checked={activeSubdomainCheckboxItems[1]}
                      disabled={
                        !activeSubdomainCheckboxItems[0] &&
                        !activeSubdomainCheckboxItems[1]
                      }
                      sx={SWITCH_STYLES}
                    />
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        color="#27272a"
        variant="middle"
        sx={{
          "&.MuiDivider-root": {
            m: 3,
            p: 0,
          },
        }}
      />
      {/* open ports */}
      <Box
        sx={{
          "&:hover": { bgcolor: "#141415" },
          pt: "7px",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          {/* main checkbox & text's */}
          <Box display="flex">
            {/* left */}
            <Box flex={0.03}>
              <Box display="flex" alignItems="start" justifyContent="center">
                <Checkbox
                  onChange={() =>
                    identifyOpenPortsLimits === 0
                      ? setIdentifyOpenPortsLimits(100)
                      : setIdentifyOpenPortsLimits(0)
                  }
                  checked={identifyOpenPortsLimits !== 0}
                  defaultChecked
                  size="small"
                  color="primary"
                />
              </Box>
            </Box>
            {/* right */}
            <Box flex={1.2}>
              <Stack spacing={1}>
                {/* title */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap="6px"
                  pt="5px"
                  onClick={() =>
                    identifyOpenPortsLimits === 0
                      ? setIdentifyOpenPortsLimits(100)
                      : setIdentifyOpenPortsLimits(0)
                  }
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(229 229 229/1)",
                      fontSize: "13px",
                    }}
                  >
                    Identify Open Ports
                  </Typography>
                  {/* detail icon */}
                  <CustomTooltip
                    title={
                      <Box maxWidth="200px" pr="20px">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "11px",
                          }}
                        >
                          Quickly scans for commonly used ports across all
                          discovered domains, subdomains, and IP addresses using
                          Naabu to identify open and accessible ports.
                        </Typography>
                      </Box>
                    }
                    placement="right"
                  >
                    <Box display="flex" alignItems="center">
                      <FiInfo size={14} color="rgb(161 161 170/1)" />
                    </Box>
                  </CustomTooltip>
                </Box>
                {/* description */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(161 161 170/1)",
                      fontSize: "11.7px",
                    }}
                  >
                    Port scanning for all domains, subdomains, and IPs to
                    identify open ports.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          {/* radio's */}
          <Box flex={1} px="50px" mt="20px">
            <Box display="flex" flexDirection="column">
              <RadioGroup
                name="controlled-radio-buttons-group"
                value={identifyOpenPortsLimits}
                onChange={handleIdentifyOpenPortsLimitChange}
              >
                {/* first switch */}
                <Box display="flex">
                  <FormControlLabel
                    value={100}
                    label="TOP 100 PORTS"
                    sx={{
                      mb: "15px",
                      ...FORM_CONTROL_LABEL_STYLES,
                    }}
                    control={
                      <Radio
                        size="small"
                        disabled={identifyOpenPortsLimits === 0}
                        sx={{
                          "&.MuiButtonBase-root": {
                            ml: "11px",
                            maxWidth: "1px",
                            p: 0,
                          },
                        }}
                      />
                    }
                  />
                  {/* info hover */}
                  <CustomTooltip
                    title={
                      <Box maxWidth="200px" pr="20px">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#f4f4f5",
                            fontSize: "10px",
                            fontFamily: "consolas",
                            textTransform: "uppercase",
                          }}
                        >
                          Scan the 100 most frequently used ports for quick
                          identification of common open ports.
                        </Typography>
                      </Box>
                    }
                    placement="right"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      position="relative"
                      top="-8px"
                      left="-10px"
                    >
                      <FiInfo size={14} color="rgb(161 161 170/1)" />
                    </Box>
                  </CustomTooltip>
                </Box>
                {/* second switch */}
                <Box display="flex">
                  <FormControlLabel
                    value={1000}
                    label="TOP 1000 PORTS"
                    sx={{
                      position: "relative",
                      top: "-8px",
                      ...FORM_CONTROL_LABEL_STYLES
                    }}
                    control={
                      <Radio
                        size="small"
                        disabled={identifyOpenPortsLimits === 0}
                        sx={{
                          "&.MuiButtonBase-root": {
                            ml: "11px",
                            maxWidth: "1px",
                            p: 0,
                          },
                        }}
                      />
                    }
                  />
                  {/* info hover */}
                  <CustomTooltip
                    title={
                      <Box maxWidth="220px">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#f4f4f5",
                            fontSize: "10px",
                            fontFamily: "consolas",
                            textTransform: "uppercase",
                          }}
                        >
                          Scan the 1000 most frequently used ports to broaden
                          discovery across a wider range of potential entry
                          points.
                        </Typography>
                      </Box>
                    }
                    placement="right"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      position="relative"
                      left="-10px"
                      top="-9px"
                    >
                      <FiInfo size={14} color="rgb(161 161 170/1)" />
                    </Box>
                  </CustomTooltip>
                </Box>
              </RadioGroup>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        color="#27272a"
        variant="middle"
        sx={{
          "&.MuiDivider-root": {
            m: 3,
            p: 0,
          },
        }}
      />
      {/* detect web tech's */}
      <Box
        sx={{
          "&:hover": { bgcolor: "#141415" },
          pt: "7px",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          {/* section checkbox & text's */}
          <Box display="flex">
            {/* left */}
            <Box flex={0.03}>
              <Box display="flex" alignItems="start" justifyContent="center">
                <Checkbox
                  onChange={() =>
                    detectWebTechCheckboxItems[0]
                      ? detectWebTechCheckboxItems[0]
                        ? setDetectWebTechCheckboxItems([false, false])
                        : setDetectWebTechCheckboxItems([true, true])
                      : detectWebTechCheckboxItems[1]
                      ? setDetectWebTechCheckboxItems([false, false])
                      : setDetectWebTechCheckboxItems([true, true])
                  }
                  checked={
                    detectWebTechCheckboxItems[0] ||
                    detectWebTechCheckboxItems[1]
                  }
                  defaultChecked
                  size="small"
                  color="primary"
                />
              </Box>
            </Box>
            {/* right */}
            <Box flex={1.2}>
              <Stack spacing={1}>
                {/* title */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap="6px"
                  pt="5px"
                  onClick={() =>
                    detectWebTechCheckboxItems[0]
                      ? detectWebTechCheckboxItems[0]
                        ? setDetectWebTechCheckboxItems([false, false])
                        : setDetectWebTechCheckboxItems([true, true])
                      : detectWebTechCheckboxItems[1]
                      ? setDetectWebTechCheckboxItems([false, false])
                      : setDetectWebTechCheckboxItems([true, true])
                  }
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(229 229 229/1)",
                      fontSize: "13px",
                    }}
                  >
                    Detect Web Technologies and Services
                  </Typography>
                  {/* detail icon */}
                  <CustomTooltip
                    title={
                      <Box maxWidth="240px" p="5px">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "11px",
                            letterSpacing: 0.5,
                          }}
                        >
                          Actively probes the provided hosts (domains or IP
                          addresses) using HTTP/HTTPS requests with httpx to
                          discover running web services and identify specific
                          web technologies, including server software,
                          programming languages, frameworks, and CMS.
                        </Typography>
                      </Box>
                    }
                    placement="left"
                  >
                    <Box display="flex" alignItems="center">
                      <FiInfo size={14} color="rgb(161 161 170/1)" />
                    </Box>
                  </CustomTooltip>
                </Box>
                {/* description */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgb(161 161 170/1)",
                      fontSize: "11px",
                    }}
                  >
                    Discover active web services and technologies for any
                    provided host (for example: app.hooli.com, 23.93.106.140,
                    23.93.106.140:8080) using httpx.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          {/* checkboxes */}
          <Box flex={1} px="50px" mt="10px">
            <Box display="flex" flexDirection="column">
              {/* first switch */}
              <Box display="flex">
                <FormControlLabel
                  label="Screenshot"
                  sx={{
                    ...FORM_CONTROL_LABEL_STYLES,
                  }}
                  control={
                    <Switch
                      onChange={() =>
                        setDetectWebTechCheckboxItems([
                          !detectWebTechCheckboxItems[0],
                          detectWebTechCheckboxItems[1],
                        ])
                      }
                      disabled={
                        !detectWebTechCheckboxItems[0] &&
                        !detectWebTechCheckboxItems[1]
                      }
                      checked={detectWebTechCheckboxItems[0]}
                      sx={SWITCH_STYLES}
                    />
                  }
                />
                <Box position="relative" top="10px">
                  <Box bgcolor="#3e2b14" borderRadius="999px" px="6px" py="1px">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#f39c0b",
                        fontSize: "10px",
                      }}
                    >
                      Experimental
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* second switch */}
              <Box>
                <FormControlLabel
                  label="Follow Redirect"
                  sx={{
                    position: "relative",
                    top: "-8px",
                    ...FORM_CONTROL_LABEL_STYLES,
                  }}
                  control={
                    <Switch
                      onChange={() =>
                        setDetectWebTechCheckboxItems([
                          detectWebTechCheckboxItems[0],
                          !detectWebTechCheckboxItems[1],
                        ])
                      }
                      checked={detectWebTechCheckboxItems[1]}
                      disabled={
                        !detectWebTechCheckboxItems[0] &&
                        !detectWebTechCheckboxItems[1]
                      }
                      sx={SWITCH_STYLES}
                    />
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default NewAssetDialogAdvancedTab;
