import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { LiaPaperclipSolid } from "react-icons/lia";
import CustomTooltip from "../atoms/CustomTooltip";
import { IoInformationCircleOutline } from "react-icons/io5";
import React, { useRef } from "react";

const CreateAssetScopeTab = () => {
  const ASSET_PLACEHOLDER = `Enter or Upload list of Domains, IP and CIDR (one per line)

                            Example:
                            acme.dev
                            acme.com
                            acme.org
                            hooli.dev
                            189.29.20.204
                            292.22.20.11/24`;

  const [IsAutoStartVulScanChecked, setAutoStartVulScanChecked] =
    React.useState<boolean>(false);

  const handleAutoStartVulScanChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAutoStartVulScanChecked(event.target.checked);
  };

  const assetFilesInputRef = useRef<HTMLInputElement>(null);

  const uploadAssetFileHandler = () => {
    if (!assetFilesInputRef.current) return;
    assetFilesInputRef.current.click();
  };

  const REMAINED_ADD_ASSETS_COUNT = 9;

  return (
    <>
      {/* asset name input */}
      <Box mt="18px" px="25px">
        <TextField
          size="small"
          placeholder="Name your asset set (e.g., ‘Production Servers - Q4’) *"
          sx={{
            width: "100%",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              transition: "all ease 100ms",
              bgcolor: "#18181b",
              border: "1px solid #3f3f46 !important",
            },
            "& .MuiInputBase-input": {
              color: "rgb(238 238 238/1)",
              opacity: 0.9,
              bgcolor: "unset",
              zIndex: 9,
              fontSize: "12.5px",
              letterSpacing: 0.5,
              "::placeholder": {
                color: "#a1a1aa",
                fontSize: "13px",
                opacity: 1,
              },
              maxHeight: "20px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #27272a",
              bgcolor: "rgb(17 17 19/1)",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#27272a !important",
              bgcolor: "#111113",
            },
          }}
        />
      </Box>
      {/* asset content input */}
      <Box mt="15px" px="25px">
        <TextField
          size="small"
          placeholder={ASSET_PLACEHOLDER}
          multiline
          rows={9}
          sx={{
            width: "100%",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              transition: "all ease 100ms",
              bgcolor: "#18181b",
              border: "1px solid #3f3f46 !important",
            },
            "& .MuiInputBase-input": {
              color: "rgb(238 238 238/1)",
              opacity: 0.9,
              bgcolor: "unset",
              zIndex: 9,
              fontSize: "12.5px",
              letterSpacing: 0.5,
              whiteSpace: "pre-line",
              "::placeholder": {
                color: "#a1a1aa",
                fontSize: "13px",
                opacity: 1,
                lineHeight: "20px",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #27272a",
              bgcolor: "rgb(17 17 19/1)",
              borderStartStartRadius: "5px",
              borderStartEndRadius: "5px",
              borderEndEndRadius: "0",
              borderEndStartRadius: "0",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#27272a !important",
              bgcolor: "#111113",
            },
          }}
        />
      </Box>
      {/* tooltip */}
      <Box px="25px">
        <Box
          px="10px"
          sx={{
            borderEndEndRadius: "5px",
            borderEndStartRadius: "5px",
            minHeight: "38px",
            maxHeight: "38px",
            display: "flex",
            bgcolor: "#111113",
            borderBottom: "1px solid #262626",
            borderInline: "1px solid #262626",
            boxSizing: "border-box",
            "&:hover": {
              borderColor: "rgb(63, 63, 70)",
            },
            "& .asset-file-input": {
              display: "none",
            },
          }}
        >
          {/* switch */}
          <Box flex={1}>
            <Box display="flex" alignItems="center" height="100%">
              {/* switch */}
              <Box>
                <FormControlLabel
                  label={
                    <Typography
                      sx={{
                        color: IsAutoStartVulScanChecked
                          ? "#e5e5e5"
                          : "#525252",
                        fontSize: "14px",
                        transition: "color ease 80ms",
                      }}
                    >
                      Auto start vulnerability scan after discovery
                    </Typography>
                  }
                  control={
                    <Switch
                      onChange={handleAutoStartVulScanChange}
                      sx={{
                        scale: 0.8,
                        display: "flex",
                        alignItems: "center",
                        "& .Mui-checked": {
                          "& .MuiSwitch-thumb": {
                            bgcolor: "#09090b",
                            "::after": {
                              bgcolor: "white",
                            },
                          },
                          "& + .MuiSwitch-track": {
                            bgcolor: "#e5e5e5 !important",
                            opacity: "1 !important",
                          },
                        },
                        "& .MuiSwitch-thumb": {
                          position: "relative",
                          "::after": {
                            content: `""`,
                            width: "4px",
                            height: "4px",
                            borderRadius: "9999px",
                            bgcolor: "#000",
                            position: "absolute",
                            top: "5px",
                            left: "4.6px",
                            zIndex: 9999,
                          },
                          ml: "7px",
                          mt: "3px",
                          bgcolor: "#eeeeee",
                          width: "14px",
                          height: "14px",
                          boxSizing: "border-box",
                        },
                        "& .MuiTouchRipple-root": {
                          display: "none",
                          color: "transparent",
                        },
                        "& .MuiSwitch-track": {
                          m: 0,
                          bgcolor: "#525252",
                          opacity: 1,
                          height: "23px",
                          pr: "42px",
                          borderRadius: "9999px",
                          boxSizing: "border-box",
                        },
                      }}
                    />
                  }
                />
              </Box>
            </Box>
          </Box>
          {/* actual file input */}
          <input
            className="asset-file-input"
            ref={assetFilesInputRef}
            type="file"
            title="."
          />
          {/* upload file */}
          <Box flex={0.28}>
            <Box
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              <Button
                onClick={uploadAssetFileHandler}
                sx={{
                  textTransform: "none",
                  bgcolor: "#09090b",
                  border: "1px solid rgb(39 39 42/1)",
                  px: "3px",
                  py: "3px",
                  m: 0,
                  minWidth: "10px",
                  minHeight: "10px",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    "& .upload-file_icon": {
                      color: "#fff !important",
                    },
                    "& .upload-file_text": {
                      color: "#fff",
                    },
                  },
                }}
              >
                {/* icon */}
                <Box display="flex" alignItems="center">
                  <LiaPaperclipSolid
                    className="upload-file_icon"
                    color="rgb(113 113 122/1)"
                    size={14}
                    style={{
                      transform: "rotateZ(-45deg)",
                    }}
                  />
                </Box>
                {/* text */}
                <Box>
                  <Typography
                    className="upload-file_text"
                    variant="subtitle2"
                    sx={{
                      fontSize: "12px",
                      color: "rgb(113 113 122/1)",
                    }}
                  >
                    Upload files
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* discovering limit */}
      <Box mt="4px">
        <Box display="flex" px="25px" alignItems="center" gap="3px">
          <CustomTooltip
            title={
              <Box
                borderRadius="5px"
                maxWidth="220px"
                boxSizing="border-box"
                p="5px"
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Each unique domain added for Discovery will count towards this
                  limit.
                </Typography>
              </Box>
            }
            placement="right"
          >
            <Box display="flex" alignItems="end">
              <IoInformationCircleOutline color="rgb(245 158 11/1)" size={19} />
            </Box>
          </CustomTooltip>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#a1a1aa",
              fontSize: "",
              display: "flex",
            }}
          >
            You can Discover up to&nbsp;
            <Box
              component="span"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#eee",
              }}
            >
              10
            </Box>
            &nbsp; domains per month (
            <Box
              component="span"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#eee",
              }}
            >
              {REMAINED_ADD_ASSETS_COUNT} remaining
            </Box>
            ).
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CreateAssetScopeTab;
