import { Avatar, Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import type { UserT } from "@appTypes/types/user";
import CustomDialog from "../Common/CustomDialog";
import useUserApiKey from "../../hooks/useUserApiKey";
import UserApiKeyComponent from "./UserApiKeyComponent";
import BillingDialog from "../Common/BillingDialog/BillingDialog";
import useMenu from "../../hooks/ui/useMenu";
import useDialog from "../../hooks/ui/useDialog";

const CustomProfileMenuItem = (props: {
  value: string;
  onClick?: () => void;
}) => {
  const { value, onClick } = props;
  return (
    <MenuItem
      sx={{
        color: "#909098",
        borderRadius: "4px",
        "&:hover": { color: "#fefefe", bgcolor: "#27272a" },
        transition: "all ease-in 100ms",
      }}
      onClick={onClick}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
        {value}
      </Typography>
    </MenuItem>
  );
};

const NavbarProfile = ({ user }: { user: Partial<UserT> }) => {
  const {
    anchorEl,
    IS_MENU_OPEN: IS_PROFILE_MENU_OPEN,
    handleMenuTriggerClick: handleClick,
    handleMenuClose: handleClose,
  } = useMenu();

  const {
    isDialogOpen: isApiUserKeyDropDownOpen,
    setIsDialogOpen: setIsUserApiKeyDialogOpen,
  } = useDialog();

  const {
    isDialogOpen: isBillingDialogOpen,
    setIsDialogOpen: setIsBillingDialogOpen,
  } = useDialog();

  const userApiKey = useUserApiKey();

  return (
    <>
      <Avatar
        src={user.avatar}
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
        aria-controls={IS_PROFILE_MENU_OPEN ? "avatar-drop-down" : undefined}
        aria-haspopup="true"
        aria-expanded={IS_PROFILE_MENU_OPEN ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="avatar-drop-down"
        anchorEl={anchorEl}
        open={IS_PROFILE_MENU_OPEN}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "avatar-drop-down-trigger",
        }}
        sx={{
          mt: "5px",
          "& .MuiPaper-root": {
            minWidth: "230px",
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
          onClick={() => setIsBillingDialogOpen(true)}
        >
          <Stack spacing={2}>
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
                  sx={{ color: "#9d9da6", fontSize: ".75rem", fontWeight: 400 }}
                >
                  @{user.userName}
                </Typography>
              </Box>
            </Box>
            {/* button */}
            <Box width="170px">
              <Box
                sx={{
                  bgcolor: "#6366f1",
                  "&:hover": { bgcolor: "#4f46e5" },
                  "&:hover .upgrade-plan-text": { color: "#fafafa" },
                  transition: "all ease-in 100ms",
                  width: "100%",
                  py: "5px",
                  px: "10px",
                  borderRadius: "6px",
                  verticalAlign: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  className="upgrade-plan-text"
                  sx={{
                    fontSize: ".85rem",
                    color: "#cbcfdc",
                    transition: "all ease-in 100ms",
                    maxHeight: "16px",
                    fontWeight: 600,
                  }}
                >
                  Upgrade to Pro
                </Typography>
              </Box>
            </Box>
          </Stack>
        </MenuItem>
        {/* divider */}
        <Box sx={{ bgcolor: "#27272a", height: ".5px", my: "3px" }} />
        <CustomProfileMenuItem
          value="Api key"
          onClick={() => {
            setIsUserApiKeyDialogOpen(true);
            handleClose();
          }}
        />
        <CustomProfileMenuItem value="Settings" />
        <CustomProfileMenuItem
          value="Terms"
          onClick={() =>
            window.open("https://projectdiscovery.io/terms", "_blank")
          }
        />
        <CustomProfileMenuItem value="Logout" />
      </Menu>
      {/* api key dialog */}
      <CustomDialog
        isOpen={isApiUserKeyDropDownOpen}
        setIsOpen={setIsUserApiKeyDialogOpen}
      >
        {/* user api key component */}
        <UserApiKeyComponent
          userApiKey={userApiKey}
          setUserApiKeyDialogState={setIsUserApiKeyDialogOpen}
        />
      </CustomDialog>
      {/* billing dialog */}
      <BillingDialog
        isOpen={isBillingDialogOpen}
        setIsOpen={setIsBillingDialogOpen}
      />
    </>
  );
};

export default NavbarProfile;
