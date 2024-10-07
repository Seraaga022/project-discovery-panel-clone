import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense } from "react";
import { UserT } from "../../utils/types/User";
import CustomDialog from "../ui/CustomDialog";
import { Clear } from "@mui/icons-material";
import Loader from "../Loader/Loader";
const ApiKeyComponent = lazy(() => import("./ApiKey"));

const CustomAvatar = ({ user }: { user: Partial<UserT> }) => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const open = !!anchorElement;
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const [apiKeyDropDownState, setApiKeyDropDownState] = React.useState(false);
  const [apiKey] = React.useState<number>(Math.random());

  return (
    <>
      <Avatar
        src={user.avatar!}
        alt="user"
        sx={{
          "&.MuiAvatar-root": {
            bgcolor: "#3b3b3b",
            border: "1px solid #27272a",
            width: "33px",
            height: "33px",
            maxHeight: "33px",
          },
          cursor: "pointer",
        }}
        id="avatar-drop-down-trigger"
        aria-controls={open ? "avatar-drop-down" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="avatar-drop-down"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "avatar-drop-down-trigger",
        }}
        sx={{
          mt: "8px",
          "& .MuiPaper-root": {
            minWidth: "210px",
            bgcolor: "#09090b",
            color: "#fafafa",
            border: "1px solid #27272a",
            borderRadius: "5px",
            "& .MuiMenu-list": {
              padding: "3px",
            },
          },
        }}
      >
        <MenuItem
          sx={{
            borderRadius: "3px",
            "&:hover": { bgcolor: "#262629" },
            "&:hover .upgrade-plan-text": { color: "#fafafa" },
            transition: "all ease-in 100ms",
          }}
        >
          <Stack spacing={3}>
            <Box display="flex" alignItems="center" gap="10px">
              <Box>
                <Avatar
                  alt="user"
                  src={user.avatar!}
                  sx={{
                    "&.MuiAvatar-root": {
                      bgcolor: "#3b3b3b",
                      border: "1px solid #27272a",
                      width: "40px",
                      height: "40px",
                      maxHeight: "40px",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#9d9da6", fontWeight: 400 }}
                >
                  @{user.userName}
                </Typography>
              </Box>
            </Box>
            <Box width="170px">
              <Box
                sx={{
                  bgcolor: "#6366f1",
                  "&:hover": { bgcolor: "#4f46e5" },
                  "&:hover .upgrade-plan-text": { color: "#fafafa" },
                  transition: "all ease-in 100ms",
                  width: "100%",
                  p: "10px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  className="upgrade-plan-text"
                  sx={{
                    fontSize: "13px",
                    color: "#cbcfdc",
                    transition: "all ease-in 100ms",
                    maxHeight: "16px",
                    fontWeight: 400,
                  }}
                >
                  Upgrade to Pro
                </Typography>
              </Box>
            </Box>
          </Stack>
        </MenuItem>
        <Box sx={{ bgcolor: "#27272a", height: ".5px", my: "3px" }}></Box>
        <MenuItem
          sx={{
            color: "#909098",
            borderRadius: "4px",
            "&:hover": { color: "#fefefe" },
            transition: "all ease-in 100ms",
          }}
          onClick={() => {
            setApiKeyDropDownState(true);
            handleClose();
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            Api key
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{
            color: "#909098",
            borderRadius: "4px",
            "&:hover": { color: "#fefefe" },
            transition: "all ease-in 100ms",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            Settings
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() =>
            window.open("https://projectdiscovery.io/terms", "_blank")
          }
          sx={{
            color: "#909098",
            borderRadius: "4px",
            "&:hover": { color: "#fefefe" },
            transition: "all ease-in 100ms",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            Terms
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{
            color: "#909098",
            borderRadius: "4px",
            "&:hover": { color: "#fefefe" },
            transition: "all ease-in 100ms",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            Logut
          </Typography>
        </MenuItem>
      </Menu>
      <CustomDialog
        show={apiKeyDropDownState}
        setState={setApiKeyDropDownState}
      >
        <Box
          minHeight="400px"
          maxHeight="500"
          minWidth="490px"
          maxWidth="490px"
          bgcolor="transparent"
          onClick={() => setApiKeyDropDownState(true)}
          borderRadius="20px"
          border="1px solid #27272a"
          display="flex"
          flexDirection="column"
          color="white"
          sx={{ userSelect: "none" }}
          position="relative"
        >
          {/* close button */}
          <Box position="absolute" right="0" top="0" p="20px">
            <Clear
              onClick={(event) => {
                event.stopPropagation();
                setApiKeyDropDownState(false);
              }}
              sx={{
                color: "#b6b6b7",
                fontSize: "15px",
                "&:hover": {
                  color: "#fff",
                },
                cursor: "pointer",
                transition: "color ease-in 150ms",
              }}
            />
          </Box>
          {/* image */}
          <Box>
            <img
              style={{ width: "100%", height: "380px", userSelect: "none" }}
              src="/images/api-key.png"
              alt="api-key"
            />
          </Box>
          {/* dialog title */}
          <Box
            minHeight="15%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            top="-60px"
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box>
                <Typography variant="h6" sx={{ color: "#ffffff" }}>
                  Your API Key
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "#a1a1aa" }}>
                  Rotate or copy your API key
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* api key and copy */}
          <Box px="15px" alignItems="center">
            <Suspense fallback={<Loader />}>
              <ApiKeyComponent apiKey={String(apiKey)} />
            </Suspense>
          </Box>
          {/* rotate api key button */}
          <Box minHeight="15%" boxSizing="border-box" padding="15px">
            <Button
              sx={{
                width: "100%",
                bgcolor: "#eeeeee",
                "&:hover": { bgcolor: "#d7d7d7" },
                textTransform: "none",
                color: "#18181b",
              }}
            >
              <Typography variant="subtitle2">Rotate API Key</Typography>
            </Button>
          </Box>
        </Box>
      </CustomDialog>
    </>
  );
};

export default CustomAvatar;
