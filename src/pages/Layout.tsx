import { Box, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import RobotoFont from "../theme/RobotoFont";

const Layout = () => {
  return (
    <Box height="100svh" minWidth="1300px">
      <NavBar />
      <ThemeProvider theme={createTheme({})}>
        <Box id="rest">
          <ThemeProvider theme={RobotoFont}>
            <Outlet />
          </ThemeProvider>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
