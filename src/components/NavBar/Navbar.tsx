import { AppBar, Box, Stack, SvgIcon, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import Circular from "../Common/Loaders/Circular";
import "./Feedback/feedbackRichInput.css";
import NavbarProfile from "./NavbarProfile";
import NavChangelog from "./NavChangelog";
import NavFeedback from "./NavFeedback";
import NavigationButtons from "./NavigationButtonsCompo";
import NavSettings from "./NavSettings";
import NavDocs from "./NavDocs";
const TeamManagement = lazy(() => import("./TeamManagementCompo"));

const Navbar = () => {
  const user = useUser();

  return (
    <Box bgcolor="transparent" mb="68px" width="1300px">
      <AppBar
        sx={{
          backgroundColor: "unset",
          boxShadow: "unset",
          display: "flex",
          flexDirection: "row",
          color: "white",
          padding: "10px",
          gap: "10px",
          minHeight: "65px",
          maxHeight: "65px",
          borderBottom: "1px solid #202022",
          px: "20px",
          backdropFilter: "blur(9px) brightness(25%)",
        }}
      >
        {/* left section */}
        <Box flex={1} display="flex" alignItems="center">
          <Box display="flex" justifyContent="start">
            <Box marginRight="auto" display="flex" p="10px" gap="15px">
              {/* logo */}
              <Box>
                <Link to="">
                  <Box
                    display="flex"
                    gap="10px"
                    alignItems="center"
                    height="100%"
                  >
                    {/* Logo */}
                    <Box>
                      <SvgIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.9688 2.0043C5.42727 1.69307 2.31157 18.3581 12.7067 22.5173M31.9957 21.865C32.3073 5.34145 15.6241 2.22913 11.4604 12.6129M12.1402 31.9957C28.6817 32.3069 31.7974 15.6419 21.4023 11.4827M2.00431 12.0486C1.69274 28.5721 18.3759 31.6845 22.5396 21.3006"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </SvgIcon>
                    </Box>
                    {/* Version */}
                    <Box marginRight="5px">
                      <Typography
                        sx={{
                          color: "#a1a1ab",
                          "&:hover": { color: "#e5e5e5" },
                          fontSize: "12px",
                          transition: "color ease-in 60ms",
                          fontWeight: 400,
                        }}
                      >
                        BETA
                      </Typography>
                    </Box>
                    {/* Divider */}
                    <Box
                      sx={{
                        backgroundColor: "#404040",
                        maxWidth: "1.1px",
                        maxHeight: "70%",
                        minWidth: "1.1px",
                        minHeight: "70%",
                        rotate: "17deg",
                        transition: "all 0.3s ease",
                        color: "transparent",
                      }}
                    />
                  </Box>
                </Link>
              </Box>
              {/* team management */}
              <Suspense fallback={<Circular />}>
                <TeamManagement user={user} />
              </Suspense>
            </Box>
          </Box>
        </Box>
        {/* middle section */}
        <Box flex={1} display="flex" justifyContent="center">
          <NavigationButtons />
        </Box>
        {/* right section */}
        <Box flex={1}>
          <Box
            height="100%"
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap="22px">
              <NavFeedback />
              <NavChangelog />
              <NavDocs />
              {/* settings and custom avatar */}
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <NavSettings />
                <NavbarProfile />
              </Stack>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
