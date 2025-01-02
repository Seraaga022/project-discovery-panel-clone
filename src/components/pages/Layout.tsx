import { Box, ThemeProvider } from "@mui/material";
import Navbar from "../NavBar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { AppTheme } from "../../theme/AppTheme";
import { Toaster } from "sonner";
import { LuSiren } from "react-icons/lu";
import Circular from "../Common/Loaders/Circular";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import CloseIcon from "@mui/icons-material/close";
import SettingsDialog from "./SettingsDialog";

const Layout = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={AppTheme}>
      <Toaster
        theme="dark"
        toastOptions={{
          duration: Infinity,
          closeButton: true,
          classNames: { closeButton: "toast-close-button" },
        }}
        icons={{
          error: <LuSiren size={16} color="#c25875" />,
          loading: <Circular color="#ededed" />,
          success: <CiCircleCheck size={16} color="#cdff00" />,
          warning: <CiCircleInfo size={16} color="#ffce66" />,
          close: (
            <CloseIcon
              sx={{
                fontSize: "11px",
                color: "#ededed",
              }}
            />
          ),
        }}
      />
      <Box minWidth="1300px">
        <Navbar />
        <Box id="rest">
          <Outlet />
        </Box>
      </Box>
      {location.pathname === "/settings" && <SettingsDialog />}
    </ThemeProvider>
  );
};

export default Layout;
