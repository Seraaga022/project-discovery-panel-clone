import { Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  SettingsOutlined,
  AddOutlined,
  Clear,
} from "@mui/icons-material";
import React from "react";
import { UserT } from "../../utils/types/User";
import UserPlanChip from "./UserPlanChip";
import { RxPerson } from "react-icons/rx";
import HoverCard from "../ui/HoverCard";
import CustomChip from "../ui/CustomChip";
import CustomDialog from "../ui/CustomDialog";
import BillingComponent from "../BillingComponent";

const TeamManagement = ({ user }: { user: UserT }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [billingDialogState, setBillingDialogState] =
    React.useState<boolean>(false);

  return (
    <>
      <Box
        id="team-manage-trigger"
        aria-controls={open ? "team-manage-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          userSelect: "none",
          "&:hover": { cursor: "pointer" },
          "&:hover .arrows-container": { color: "#f5f5f5" },
          "&:hover .personal-team-manager": { color: "#f5f5f5" },
        }}
      >
        <Box color="#f5f5f5" display="flex" gap="5px">
          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            sx={{ transition: "all ease-in 100ms" }}
          >
            {/* personal team section */}
            <Box>
              <Typography
                variant="subtitle2"
                className="personal-team-manager"
                sx={{
                  color: "#d4d4d4",
                  fontSize: "13px",
                  transition: "color ease-in 90ms",
                  fontWeight: 400,
                }}
              >
                Personal
              </Typography>
            </Box>
            {/* Plan section */}
            <Box>
              <UserPlanChip plan={user.plan} />
            </Box>
          </Box>
          {/* Menu Buttons */}
          <Box
            sx={{
              bgcolor: open ? "#262626" : "",
              "&:hover": { bgcolor: "#262626", cursor: "pointer" },
              "&:hover .arrows-container": { color: "#f5f5f5" },
              transition: "all ease-in 90ms",
              paddingInline: "6px",
              paddingBlock: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              maxHeight: "20px",
            }}
          >
            <Box
              className="arrows-container"
              sx={{
                transition: "all ease-in 90ms",
                position: "relative",
                top: "-4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#7f7f80",
              }}
            >
              <Box maxHeight="7px">
                <ExpandLess sx={{ fontSize: "12px" }} />
              </Box>
              <Box maxHeight="7px">
                <ExpandMore sx={{ fontSize: "12px" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Menu
        id="team-manage-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "team-manage-trigger",
        }}
        sx={{
          mt: "7px",
          "& .MuiPaper-root": {
            minWidth: "290px",
            bgcolor: "#09090b",
            color: "#fafafa",
            border: "1px solid #27272a",
            borderRadius: "5px",
            "& .MuiMenu-list": {
              padding: "13px",
            },
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            border: "1px solid #262629",
            borderRadius: "6px",
            backgroundColor: "rgb(24 24 27/ 1)",
            "&:hover": { bgcolor: "#262629" },
            height: "40px",
            mb: "10px",
          }}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="end"
            alignItems="center"
            height="100%"
          >
            {/* user icon and Personal text */}
            <Box
              display="flex"
              alignItems="center"
              mr="auto"
              height="100%"
              gap="6px"
            >
              <Box display="flex" alignItems="center">
                <RxPerson
                  size={15}
                  color="#a1a1aa"
                  style={{ paddingBottom: "2px" }}
                />
              </Box>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "13px", fontWeight: 400 }}
                >
                  Personal
                </Typography>
              </Box>
            </Box>
            {/* user plan and plan color */}
            <Box display="flex" alignItems="center">
              {/* plan chip */}
              <HoverCard
                title={
                  <Box p="8px" py="15px" maxWidth="200px">
                    <Stack spacing={2}>
                      {/* chip */}
                      <Box>
                        <CustomChip>free</CustomChip>
                      </Box>
                      {/* content */}
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "10px",
                            fontWeight: "400",
                            color: "#909099",
                          }}
                        >
                          Unlock blazing-fast scans, invite team members,
                          integrate with your tools, access exclusive templates.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                }
                placement="right-start"
              >
                <Box>
                  <UserPlanChip plan={user.plan} />
                </Box>
              </HoverCard>
              {/* plan color */}
              <Box ml="10px">
                <Box
                  minWidth="16px"
                  minHeight="16px"
                  bgcolor="#151518"
                  border="1px solid #1d1d20"
                  borderRadius="999px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    minWidth="6.5px"
                    minHeight="7px"
                    bgcolor="#d4d4d4"
                    borderRadius="999px"
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </MenuItem>
        {/* create team item */}
        <Box
          sx={{
            height: "30px",
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
            px: "10px",
            "&:hover .create-team-icon, &:hover .create-team-text": {
              color: "#f4f4f5",
            },
            mb: "5px",
          }}
          onClick={() => setBillingDialogState(true)}
        >
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Box height="100%" display="flex" alignItems="center">
              <AddOutlined
                className="create-team-icon"
                sx={{
                  fontSize: "20px",
                  color: "#a1a1aa",
                  transition: "all ease-in 100ms",
                }}
              />
            </Box>
            <Box height="100%" display="flex" alignItems="center">
              <Typography
                variant="subtitle2"
                className="create-team-text"
                sx={{
                  fontSize: "12px",
                  color: "#a1a1aa",
                  transition: "all ease-in 100ms",
                  fontWeight: 400,
                }}
              >
                Create a new team
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* manage team item */}
        <Box
          sx={{
            height: "30px",
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
            px: "10px",
            "&:hover .manage-team-icon, &:hover .manage-team-text": {
              color: "#f4f4f5",
            },
          }}
          onClick={() => setBillingDialogState(true)}
        >
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Box height="100%" display="flex" alignItems="center">
              <SettingsOutlined
                className="manage-team-icon"
                sx={{
                  fontSize: "20px",
                  color: "#a1a1aa",
                  transition: "all ease-in 100ms",
                }}
              />
            </Box>
            <Box height="100%" display="flex" alignItems="center">
              <Typography
                variant="subtitle2"
                className="manage-team-text"
                sx={{
                  fontSize: "12px",
                  color: "#a1a1aa",
                  transition: "all ease-in 100ms",
                  fontWeight: 400,
                }}
              >
                Manage team
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* billing dialog */}
        <CustomDialog
          show={billingDialogState}
          setState={setBillingDialogState}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
            pb="25px"
            position="relative"
          >
            {/* title */}
            <Box>
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ffffff", fontWeight: 500, fontSize: "21px" }}
                >
                  Choose Your Plan
                </Typography>
              </Box>
            </Box>
            {/* close button */}
            <Box position="absolute" top="15px" right="20px">
              <Clear
                onClick={(event) => {
                  event.stopPropagation();
                  setBillingDialogState(false);
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
          </Box>
          <BillingComponent />
        </CustomDialog>
      </Menu>
    </>
  );
};

export default TeamManagement;
