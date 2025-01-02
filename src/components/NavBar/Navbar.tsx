import { AppBar, Box, Stack } from "@mui/material";
import { lazy, Suspense } from "react";
import { useUser } from "../../hooks/useUser";
import Circular from "../Common/Loaders/Circular";
import "./Feedback/feedbackRichInput.css";
import NavbarProfile from "./NavbarProfile";
import NavChangelog from "./NavChangelog";
import NavDocs from "./NavDocs";
import NavFeedback from "./NavFeedback";
import NavigationButtons from "./NavigationButtonsCompo";
import NavLogo from "./NavLogo";
import NavSettings from "./NavSettings";
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
              <NavLogo />
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
