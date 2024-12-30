import { Box, ThemeProvider } from "@mui/material";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { AppTheme } from "../../theme/AppTheme";
import type { UserT } from "@appTypes/types/user";

const Layout = () => {
  const user: UserT = {
    plan: "free",
    email: "JohnDoe@gmail.com",
    avatar: "",
    get userName() {
      return this.email.split("@")[0];
    },
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <Box minWidth="1300px">
        <Navbar user={user} />
        <Box id="rest">
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
